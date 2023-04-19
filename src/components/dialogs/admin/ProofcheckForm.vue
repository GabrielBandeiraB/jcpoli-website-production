<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="800px">
      <v-form ref="form" v-model="valid" @submit.prevent="saveRevision">
        <v-card>
          <v-card-title>
            <span class="headline">Revisão</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-radio-group v-model="items.workOriginalite.valueSelected">
                    <template v-slot:label>
                      <div>
                        <strong>{{items.workOriginalite.title}}</strong>
                        {{items.workOriginalite.subtitle}}
                      </div>
                    </template>
                    <v-radio
                      v-for="(item, index) in items.workOriginalite.options"
                      :key="index"
                      :label="item.text"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                  <v-radio-group v-model="items.areaContribution.valueSelected">
                    <template v-slot:label>
                      <div>
                        <strong>{{items.areaContribution.title}}</strong>
                        {{items.areaContribution.subtitle}}
                      </div>
                    </template>
                    <v-radio
                      v-for="(item, index) in items.areaContribution.options"
                      :key="index"
                      :label="item.text"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                  <v-radio-group v-model="items.technicalQuality.valueSelected">
                    <template v-slot:label>
                      <div>
                        <strong>{{items.technicalQuality.title}}</strong>
                        {{items.technicalQuality.subtitle}}
                      </div>
                    </template>
                    <v-radio
                      v-for="(item, index) in items.technicalQuality.options"
                      :key="index"
                      :label="item.text"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                  <v-radio-group v-model="items.presentationOrganization.valueSelected">
                    <template v-slot:label>
                      <div>
                        <strong>{{items.presentationOrganization.title}}</strong>
                        {{items.presentationOrganization.subtitle}}
                      </div>
                    </template>
                    <v-radio
                      v-for="(item, index) in items.presentationOrganization.options"
                      :key="index"
                      :label="item.text"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                  <v-radio-group v-model="items.recomendation.valueSelected">
                    <template v-slot:label>
                      <div>
                        <strong>{{items.recomendation.title}}</strong>
                        {{items.recomendation.subtitle}}
                      </div>
                    </template>
                    <v-radio
                      v-for="(item, index) in items.recomendation.options"
                      :key="index"
                      :label="item.text"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                  <v-radio-group v-model="items.trust.valueSelected">
                    <template v-slot:label>
                      <div>
                        <strong>{{items.trust.title}}</strong>
                        {{items.trust.subtitle}}
                      </div>
                    </template>
                    <v-radio
                      v-for="(item, index) in items.trust.options"
                      :key="index"
                      :label="item.text"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                  <v-radio-group v-model="items.category.valueSelected">
                    <template v-slot:label>
                      <div>
                        <strong>{{items.category.title}}</strong>
                        {{items.category.subtitle}}
                      </div>
                    </template>
                    <v-radio
                      v-for="(item, index) in items.category.options"
                      :key="index"
                      :label="item.text"
                      :value="item.value"
                    ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    solo
                    label="Mensagem para a organização"
                    v-model="mensagemOrganizacao"
                    required
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" flat text @click="hideDialog">Cancelar</v-btn>
            <v-btn type="submit" flat color="success">Submeter</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Inject } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { submitWork } from "@/services/api/submission";
import { getProofread, saveProofRead } from "@/services/api/proofreads";
import LoaderMixin from "@/mixins/loader";
import NotificationMixin from "@/mixins/notification";

@Component
export default class ProofcheckForm extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  @Prop({ type: Boolean, default: false }) private showDialog: boolean;
  @Prop(Number) private submissionId: number;
  @Prop(Number) private submissionUserId: number;
  private dialog: boolean = false;
  private valid: boolean = false;
  private title: string = "";
  private mensagemOrganizacao = "";
  private items = {
    workOriginalite: {
      valueSelected: 0,
      title: "Originalidade do trabalho: ",
      subtitle:
        "Como você avalia a originalidade do trabalho apresentado nesse artigo?",
      options: [
        { value: 5, text: "5. Muito original" },
        { value: 4, text: "4. Originalidade acima da média" },
        { value: 3, text: "3. Originalidade média" },
        { value: 2, text: "2. Pouca originalidade" },
        { value: 1, text: "1. Nenhuma originalidade" }
      ]
    },
    areaContribution: {
      valueSelected: 0,
      title: "Contribuição para a área: ",
      subtitle: "Como você avalia a contribuição do artigo para a área?",
      options: [
        { value: 5, text: "5. Grande contribuição para a área" },
        { value: 4, text: "4. Contribuição significante" },
        { value: 3, text: "3. Contribuição pequena, mas clara" },
        { value: 2, text: "2. Pouca contribuição" },
        {
          value: 1,
          text: "1. Nenhuma contribuição discernível para a área"
        }
      ]
    },
    technicalQuality: {
      valueSelected: 0,
      title: "Qualidade técnica: ",
      subtitle:
        "Como você avalia a qualidade técnica do trabalho apresentado nesse artigo?",
      options: [
        { value: 5, text: "5. Excelente" },
        { value: 4, text: "4. Boa" },
        { value: 3, text: "3. Média" },
        { value: 2, text: "2. Baixa" },
        {
          value: 1,
          text: "1. Inaceitável"
        }
      ]
    },
    presentationOrganization: {
      valueSelected: 0,
      title: "Organização e apresentação: ",
      subtitle: `Como você avalia a legibilidade, clareza e organização desse artigo?
         As citaçôes e formatação estão de acordo com o estilo da conferência?`,
      options: [
        { value: 5, text: "5. Excelente" },
        { value: 4, text: "4. Boa" },
        { value: 3, text: "3. Média" },
        { value: 2, text: "2. Baixa" },
        {
          value: 1,
          text: "1. Inaceitável"
        }
      ]
    },
    recomendation: {
      valueSelected: 0,
      title: "Recomendação para esse trabalho: ",
      subtitle: "O que você recomenda para esse artigo?",
      options: [
        {
          value: 5,
          text:
            "5. Deve ser aceito - Tenho fortes argumentos a favor da aceitação"
        },
        {
          value: 4,
          text:
            "4. Aceitação fraca - Não irei lutar fortemente pela aceitação desse trabalho"
        },
        { value: 3, text: "3. Neutro - Não tenho certeza" },
        {
          value: 2,
          text: "2. Rejeição fraca - Não irei lutar fortemente contra"
        },
        {
          value: 1,
          text:
            "1. Não deve ser aceito - Tenho fortes argumentos a favor da não aceitação"
        }
      ]
    },
    trust: {
      valueSelected: "",
      title: "Confiança do revisor: ",
      subtitle: "Qual é a sua confiança a respeito dessa revisão?",
      options: [
        { value: 3, text: "Sou um especialista na área" },
        {
          value: 2,
          text: "Sou familiarizado com trabalho nessa área"
        },
        { value: 1, text: "Não sou um especialista na área" }
      ]
    },
    category: {
      valueSelected: "",
      title: "Categoria: ",
      subtitle: "Em qual categoria o trabalho se enquadra?",
      options: [
        { value: "oral-presentation", text: "Apresentação Oral" },
        { value: "poster", text: "Poster" }
      ]
    }
  
  };

  constructor() {
    super();
  }

  @Watch("showDialog")
  private showDialogChanged(newValue: boolean, oldValue: boolean) {
    this.dialog = newValue;
  }

  private hideDialog() {
    this.$emit("hidden");
  }

  private async saveRevision() {
    for (let prop in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, prop)) {
        // @ts-ignore
        if (!this.items[prop].valueSelected) {
          this.showErrorNotification("Por favor, preencha todos os campos.");
          return;
        }
      }
    }
    let data = {
      userId: this.submissionUserId,
      submissionId: this.submissionId,
      originalidade: this.items.workOriginalite.valueSelected,
      contribuicao: this.items.areaContribution.valueSelected,
      qualidade: this.items.technicalQuality.valueSelected,
      organizacao: this.items.presentationOrganization.valueSelected,
      recomendacao: this.items.recomendation.valueSelected,
      confiancaRevisor: this.items.trust.valueSelected,
      categoria: this.items.category.valueSelected,
      mensagemOrganizacao: this.mensagemOrganizacao
    };
    this.showLoader();
    saveProofRead(data)
      .then(() => {
        this.showSuccessNotification("Revisão enviada com sucesso.");
        this.hideLoader();
        this.hideDialog();
        this.$emit("loadData");
      })
      .catch(err => {
        this.hideLoader();
        console.log(err);
        this.showErrorNotification("Ocorreu um problema ao enviar revisão.");
      });
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
</style>
