<template>
  <v-layout>
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-card>
          <v-card-title class="headline">Escolha os revisores do trabalho N° {{submissionId}}</v-card-title>
          <v-card-text>
            <v-autocomplete
              :items="revisores"
              :label="'1°'"
              v-model="revisor1"
              no-data-text="Nenhum revisor encontrado."
              :rules="[v => !!v || 'Selecione pelo menos um revisor']"
              required
            ></v-autocomplete>
            <v-autocomplete
              :items="revisores"
              :label="'2°'"
              v-model="revisor2"
              no-data-text="Nenhum revisor encontrado."
            ></v-autocomplete>
            <v-autocomplete
              :items="revisores"
              :label="'3̣°'"
              v-model="revisor3"
              no-data-text="Nenhum revisor encontrado."
            ></v-autocomplete>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="red darken-1" flat="flat" @click="hideDialog">Cancelar</v-btn>

            <v-dialog max-width="290" v-model="dialog2">
              <template v-slot:activator="{ on }">
                <v-btn type="submit" color="green darken-1" flat="flat">Atribuir</v-btn>
              </template>
              <v-card>
                <v-card-title></v-card-title>
                <v-card-text>Essa ação não poderá ser revertida. Tem certeza disso?</v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn @click="dialog2 = false" color="error" text>Cancelar</v-btn>

                  <v-btn @click="setProofreaders" color="success" text>Confirmar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Inject } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import {
  getUsersExcept,
  setSubmissionProofreaders
} from "../../../services/user";
import NotificationMixin from "@/mixins/notification";
import LoaderMixin from "@/mixins/loader";

@Component({
  components: {}
})
export default class SetProofreaderDialog extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  @Prop({ type: Boolean, default: false }) private showDialog: boolean;
  @Prop(Array) private submission: any[] = [];
  private dialog: boolean = false;
  private dialog2 = false;
  private revisores: any = null;
  private submissionId: any = null;
  private submissionUserId: any = null;
  private valid: boolean = false;

  private revisor1: any = null;
  private revisor2: any = null;
  private revisor3: any = null;

  constructor() {
    super();
  }

  @Watch("showDialog")
  private showDialogChanged(newValue: boolean, oldValue: boolean) {
    this.dialog = newValue;
    this.shownDialog();
  }

  @Watch("submission")
  private submissionChanged(newValue: any) {
    if (newValue.length > 0 && newValue[0].id !== this.submissionId) {
      this.submissionId = newValue[0].id;
    }

    if (newValue.length > 0 && newValue[0].user_id !== this.submissionUserId) {
      this.submissionUserId = newValue[0].user_id;
    }
  }

  private shownDialog() {
    if (this.dialog) {
      this.showLoader();
      getUsersExcept(this.submissionUserId)
        .then(resp => {
          if (resp.success) {
            this.revisores = resp.data;

            this.revisores = this.revisores.map((revisor: any) => {
              return {
                text: revisor.email,
                value: revisor.id
              };
            });
          }

          this.hideLoader();
        })
        .catch(err => {
          this.showErrorNotification("Ocorreu um erro ao obter os revisores.");
          this.hideLoader();
          this.hideDialog();
        });
    }
  }

  private hideDialog() {
    this.revisor1 = null;
    this.revisor2 = null;
    this.revisor3 = null;
    this.$emit("hidden");
  }

  private async submit() {
    //@ts-ignore
    if (this.$refs.form.validate()) {
      this.dialog2 = true;
    }
  }

  private async setProofreaders() {
    this.showLoader();
    try {
      await setSubmissionProofreaders(this.submissionId, [
        this.revisor1,
        this.revisor2,
        this.revisor3
      ]);

      this.showSuccessNotification("Revisores atribuidos com sucesso!");
      this.hideDialog();
      this.hideLoader();
    } catch (error) {
      this.showErrorNotification("Ocorreu um erro ao atribuir os revisores.");
      this.hideLoader();
    }
  }
}
</script>

