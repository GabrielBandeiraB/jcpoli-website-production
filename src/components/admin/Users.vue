<template>
  <div>
    <v-container class="mt-5 form-wrapper">
      <v-toolbar flat color="white">
        <v-toolbar-title>Submissões</v-toolbar-title>
        <v-btn small color="info" @click="loadData" :loading="refreshing" :disabled="refreshing">
          Atualizar
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </template>
        </v-btn>
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
        :items="users"
        :loading="loading"
        :search="search"
        v-model="selected"
        item-key="id"
        select-all
        rows-per-page-text="Itens por página:"
        no-data-text="Ops! Parece que não há nenhum usuário cadastrado."
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>
            <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
          </td>
          <td>{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.name}} {{props.item.family_name}}</td>
          <td class="text-xs-center">{{ props.item.email }}</td>
          <td class="text-xs-center">{{ props.item.created_at }}</td>
          <td class="text-xs-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  fab
                  flat
                  small
                  v-on="on"
                  @click="upgradeUser(props.item.email)"
                  v-if="props.item.type === 'user'"
                >
                  <v-icon dark color="blue">supervisor_account</v-icon>
                </v-btn>
              </template>
              <span>Promover para revisor</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon dark color="green" v-on="on" v-if="props.item.type === 'proofreader'">check</v-icon>
              </template>
              <span>Revisor</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  dark
                  color="cyan"
                  v-on="on"
                  v-if="props.item.type === 'admin'"
                >account_circle</v-icon>
              </template>
              <span>Admin</span>
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
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import LoaderMixin from "@/mixins/loader";
import { getUserSubmissions, downloadFile } from "@/services/api/submission";
import NotificationMixin from "../../mixins/notification";
import { saveAs } from "file-saver";
import { getUsers, upgradeUser } from "../../services/user";

@Component({
  components: {}
})
export default class Submissions extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  private refreshing = false;
  private submissionId: number = 0;
  private loading = false;
  private search = "";
  private selected: any = [];
  private date: Date = null;
  private headers = [
    {
      text: "Número",
      align: "center",
      value: "id"
    },
    { text: "Nome", align: "center", value: "name" },
    { text: "Email", align: "center", value: "email" },
    { text: "Data de inscrição", align: "center", value: "created_at" },
    { text: "", align: "center", value: "actions" }
  ];

  private users: any = [];

  private created() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    this.refreshing = true;
    getUsers()
      .then(result => {
        this.loading = false;
        if (result.success) {
          result.data.forEach((user: any) => {
            user.created_at = new Date(user.created_at).toLocaleDateString();
          });
          this.users = result.data;
          this.loading = false;
          this.refreshing = false;
        } else {
          this.showServerErorNotification();
        }
      })
      .catch(err => {
        this.showServerErorNotification();
        this.loading = false;
        this.refreshing = false;
      });
  }

  private upgradeUser(email: string) {
    upgradeUser(email, "proofreader")
      .then(result => {
        if (result.success) {
          this.showSuccessNotification(
            "Inscrito promovido para revisor com sucesso."
          );
        } else {
          this.showErrorNotification("Ocorreu um erro ao promover usuário.");
        }
      })
      .catch(err => {
        this.showServerErorNotification();
      });
  }
}
</script>

 
<style scoped>
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
</style>
