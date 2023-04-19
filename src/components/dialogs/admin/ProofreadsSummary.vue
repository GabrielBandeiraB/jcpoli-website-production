<template>
  <v-layout>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Resumo</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout class="mb-3">
              <v-flex xs12>
                <span class="category">
                  <h3>
                    <b>N° de revisões:</b>
                    {{summary.revisoes || 0}}
                  </h3>
                </span>
              </v-flex>
            </v-layout>
            <v-layout wrap>
              <v-flex xs12>
                <span class="category">
                  <b>Originalidade:</b>
                  {{summary.originalidade || 0}}
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Contribuição para a área:</b>
                  {{summary.contribuicao || 0}}
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Qualidade técnica:</b>
                  {{summary.qualidade || 0}}
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Organização e apresentação:</b>
                  {{summary.organizacao || 0}}
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Recomendação para esse trabalho:</b>
                  {{summary.recomendacao || 0}}
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Confiança do revisor:</b>
                  {{summary.confianca || 0}}
                </span>
              </v-flex>
              <v-flex xs12>
                <span class="category">
                  <b>Categoria:</b>
                  {{summary.categorias || "Nenhuma"}}
                </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat text @click="hideDialog">Cancelar</v-btn>
          <v-dialog max-width="290" v-model="dialog2">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" @click="toApprove = false" :disabled="status == 'ACEITO' || status == 'NÃO ACEITO' " type="submit" color="error" flat="flat">Reprovar</v-btn>
              <v-btn v-on="on" @click="toApprove = true;" :disabled="status == 'ACEITO' || status == 'NÃO ACEITO'" type="submit" color="success" flat="flat">Aprovar</v-btn>
            </template>
            <v-card>
              <v-card-title></v-card-title>
              <v-card-text>Tem certeza disso?</v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn @click="dialog2 = false" color="error" text>Cancelar</v-btn>

                <v-btn @click="setStatus" color="success" text>Confirmar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Inject } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { submitWork, setSubmissionStatus } from "@/services/api/submission";
import LoaderMixin from "@/mixins/loader";
import NotificationMixin from "@/mixins/notification";
import { getProofreadSummary } from "../../../services/api/proofreads";
import { setSubmissionProofreaders } from '../../../services/user';

@Component
export default class ProofreadsSummary extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  @Prop({ type: Boolean, default: false }) showDialog: boolean;
  @Prop(Number) submissionId!: number;
  @Prop(String) status!: string;

  private dialog: boolean = false;
  private dialog2 = false;

  private toApprove = false;

  private summary = {};
  private title: string = "";

  @Watch("showDialog")
  showDialogChanged(newVal: boolean) {
    this.dialog = newVal;

    if (newVal) {
      this.loadData();
    }
  }

  private async loadData() {
    this.showLoader();
    try {
      this.summary = await getProofreadSummary(this.submissionId);

      this.hideLoader();
    } catch (error) {
      this.showErrorNotification("Ocorreu um erro ao carregar o resumo."); 
      this.hideLoader();
    }
  }

  private async setStatus() {

    try {
      await setSubmissionStatus(this.submissionId, this.toApprove ? "aprovado" : "reprovado");

      this.dialog2 = false;

    } catch (error) {
      this.dialog2 = false;
      this.showErrorNotification("Ocorreu um erro ao definir status do trabalho.");
    }

  }

  private hideDialog() {
    this.$emit("hidden");
  }
}
</script>

<style scoped>
#wrapper {
  display: flex;
  justify-content: center;
}

.headline {
  color: #272727 !important;
}

.category {
  font-size: 14px;
  color: #272727;
}
</style>
