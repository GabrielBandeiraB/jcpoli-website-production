<template>
  <div>
    <v-container class="mt-5 form-wrapper">
      <v-tabs v-model="activeTab" fixed-tabs v-if="isAdmin">
        <v-tab href="#mobile-tabs-5-1" class="primary--text">Submissões</v-tab>

        <v-tab href="#mobile-tabs-5-2" class="primary--text">Usuários</v-tab>
      </v-tabs>

      <v-tabs-items v-model="activeTab">
        <v-tab-item :value="'mobile-tabs-5-1'">
          <v-divider></v-divider>
          <v-toolbar flat color="white">
            <v-toolbar-title>Submissões</v-toolbar-title>
            <v-btn
              small
              color="info"
              @click="loadData"
              :loading="refreshing"
              :disabled="refreshing"
            >
              Atualizar
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
              </template>
            </v-btn>
            <v-btn
              small
              color="success"
              :disabled="selected.length > 0 && selected[0].has_proofreaders"
              v-show="isAdmin && selected.length > 0"
              @click="showSetProofreader(selected)"
            >{{selected.length > 0 && selected[0].has_proofreaders ? 'Trabalho em revisão' : 'Atribuir revisor'}}</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Pesquisar"
              single-line
              hide-details
            ></v-text-field>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="submissions"
            :loading="loading"
            :search="search"
            v-model="selected"
            disable-initial-sort
            item-key="id"
            rows-per-page-text="Itens por página:"
            no-data-text="Ops! Parece que você ainda não tem nenhuma submissão."
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td class="text-xs-center">
                <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
              </td>
              <td class="text-xs-center">{{ props.item.id }}</td>
              <td class="text-xs-center">{{ props.item.title }}</td>
              <td class="text-xs-center">
                <v-btn small :color="props.item.color">{{ props.item.status }}</v-btn>
              </td>
              <td class="text-xs-center">{{ props.item.created_at }}</td>
              <td class="text-xs-center">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      fab
                      flat
                      small
                      v-on="on"
                      @click="downloadFile(props.item.file_url, props.item.title)"
                    >
                      <v-icon dark color="blue">cloud_download</v-icon>
                    </v-btn>
                  </template>
                  <span>Baixar arquivo</span>
                </v-tooltip>
                <v-tooltip bottom v-if="props.item.isProofReader">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      fab
                      flat
                      small
                      v-on="on"
                      v-if="isProofreader||isAdmin"
                      @click="showProofread(props.item.id)"
                    >
                      <v-icon dark color="gray">rate_review</v-icon>
                    </v-btn>
                  </template>
                  <span>Revisar submissão</span>
                </v-tooltip>
                <v-tooltip bottom v-if="isAdmin">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      fab
                      flat
                      small
                      v-on="on"
                      v-if="isAdmin"
                      @click="showSummary(props.item.id, props.item.status)"
                    >
                      <v-icon dark color="gray">pageview</v-icon>
                    </v-btn>
                  </template>
                  <span>Revisões</span>
                </v-tooltip>
              </td>
            </template>
            <template v-slot:no-results>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
              >Sua pesquisa por "{{ search }}" não teve nenhum resultado.</v-alert>
            </template>
          </v-data-table>
          <SubmissionForm @submissionCompleted="loadData()" />
          <ProofcheckForm
            :showDialog="showRevisionDialog"
            :submissionId="submissionId"
            :submissionUserId="$store.state.user.id"
            @loadData="loadData"
            @hidden="hideProofreadDialog"
          />
          <SetProofreader
            :showDialog="showSetProofreaderDialog"
            :submission="selected"
            @hidden="hideSetProofreader"
          />
          <ProofreadsSummary 
          :showDialog="showProofreaderSummaryDialog"
          :submissionId="submissionId"
          :status="status"
          @hidden="hideSummary"
          />
        </v-tab-item>
        <v-tab-item :value="'mobile-tabs-5-2'">
          <Users />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import LoaderMixin from "@/mixins/loader";
import { getUserSubmissions, downloadFile } from "@/services/api/submission";
import NotificationMixin from "../../mixins/notification";
import { saveAs } from "file-saver";
import SubmissionForm from "@/components/dialogs/admin/SubmissionForm.vue";
import ProofcheckForm from "@/components/dialogs/admin/ProofcheckForm.vue";
import SetProofreader from "@/components/dialogs/admin/SetProofreader.vue";
import ProofreadsSummary from "@/components/dialogs/admin/ProofreadsSummary.vue";
import Users from "@/components/admin/Users.vue";

interface Submission {
  id: number;
  title: string;
  status: string;
  created_at: string;
  color: string;
  isProofReader: boolean;
}

@Component({
  components: {
    SubmissionForm,
    ProofcheckForm,
    SetProofreader,
    ProofreadsSummary,
    Users
  }
})
export default class Submissions extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  private isProofreader = false;
  private isAdmin = false;
  private activeTab: any = null;
  private showRevisionDialog: boolean = false;
  private showSetProofreaderDialog: boolean = false;
  private showProofreaderSummaryDialog: boolean = false;
  private submissionId: number = 0;
  private loading = false;
  private refreshing = false;
  private search = "";
  private selected: any = [];
  private date: Date = null;
  private status = "";
  private headers = [
    {
      text: "#",
      align: "left",
      value: "noth",
      sortable: false
    },
    {
      text: "Número",
      align: "center",
      value: "id"
    },
    { text: "Título", align: "center", value: "title" },
    { text: "Status", align: "center", value: "status" },
    { text: "Data de submissão", align: "center", value: "created_at" },
    { text: "", align: "center", value: "actions" }
  ];

  private submissions: any = [];

  @Watch("selected")
  selectedChanged(newVal: any) {
    if (newVal.length > 1) {
      this.selected.shift();
    }
  }

  private created() {
    this.verifyUser();
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    this.refreshing = true;

    getUserSubmissions(this.$store.state.user.id)
      .then(result => {
        if (result.success) {
          if (result.data.proofreader_submissions) {
            this.filterResults(result.data.proofreader_submissions, true)
            this.filterResults(result.data.own_submissions)

            let subResp = result.data.proofreader_submissions;
            subResp = subResp.concat(result.data.own_submissions);

            this.submissions = subResp;
          } else {

            this.filterResults(result.data, this.isAdmin ? true : false);
            this.submissions = result.data;
          }
        } else {
          this.showErrorNotification(
            "Não foi possível carregar as submissões."
          );
        }

        this.loading = false;
        this.refreshing = false;
      })
      .catch(err => {
        console.log(err);
        this.showErrorNotification(
          "Ocorreu um erro ao carregar as submissões."
        );
        this.refreshing = false;
        this.loading = false;
      });
  }

  private verifyUser() {
    this.isProofreader = this.$store.state.user.type === "proofreader";
    this.isAdmin = this.$store.state.user.type === "admin";
  }

  private downloadFile(fileUrl: string, title: string) {
    this.loading = true;
    downloadFile(
      fileUrl.substring(fileUrl.lastIndexOf("/") + 1, fileUrl.length) // gambi braba
    )
      .then(file => {
        saveAs(file, title);
        this.loading = false;
      })
      .catch(err => {
        this.showErrorNotification(
          "Ocorreu um erro ao realizar o download do arquivo."
        );
        this.loading = false;
      });
  }

  private mapStatus(status: string) {
    if (status === "pendente") {
      return { color: "", text: "PENDENTE" };
    } else if (status === "revisao") {
      return { color: "warning", text: "EM REVISÃO" };
    } else if (status === "reprovado") {
      return { color: "error", text: "NÃO ACEITO" };
    } else if (status === "aprovado") {
      return { color: "success", text: "ACEITO" };
    }
  }

  private filterResults(items: any[], isProofReader = false) {
    return items.map((item: Submission) => {
      item.created_at = new Date(item.created_at).toLocaleDateString();
      item.color = this.mapStatus(item.status).color;
      item.status = this.mapStatus(item.status).text;
      item.isProofReader = isProofReader;
    });
  }

  private showProofread(submissionId: number) {
    this.submissionId = submissionId;
    this.showRevisionDialog = true;
  }

  private hideProofreadDialog() {
    this.showRevisionDialog = false;
  }

  private showSetProofreader(seletedItems: any) {
    this.showSetProofreaderDialog = true;
  }

  private hideSetProofreader() {
    this.showSetProofreaderDialog = false;
  }

  private showSummary(submissionId: number, status: string) {
    this.status = status;
    this.submissionId = submissionId;
    this.showProofreaderSummaryDialog = true;
  }

  private hideSummary() {
    this.showProofreaderSummaryDialog = false;
  }
}
</script>

 
<style>
.form-wrapper {
  max-width: 95%;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}

.status {
  padding: 5px 10px;
}

table td,
table th {
  font-size: 1.2em !important;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
