<template>
  <v-layout>
    <v-btn class="mt-3" @click.stop="dialog = true" color="primary">Adicionar</v-btn>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-form ref="form" v-model="valid" @submit.prevent="submit">
        <v-card>
          <v-card-title>
            <span class="headline">Submissão</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="Título"
                    v-model="title"
                    :rules="[v => !!v || 'Título é obrigatório']"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Selecionar arquivo"
                    prepend-icon="attach_file"
                    :rules="[v => !!v || 'Arquivo é obrigatório']"
                    required
                    v-model="fileName"
                    @click="pickFile"
                  ></v-text-field>
                  <input
                    type="file"
                    style="display: none"
                    ref="image"
                    accept=".pdf"
                    @change="onFilePicked"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" flat text @click="dialog = false">Cancelar</v-btn>
            <v-btn type="submit" flat color="success">Submeter</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch, Inject } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { submitWork } from "@/services/api/submission";
import LoaderMixin from "@/mixins/loader";
import NotificationMixin from "@/mixins/notification";

@Component
export default class SubmissionForm extends mixins(
  LoaderMixin,
  NotificationMixin
) {
  private dialog: boolean = false;
  private valid: boolean = false;

  private fileName: string = "";
  private fileUrl: string = "";
  private file: File = null;

  private title: string = "";

  constructor() {
    super();
  }

  private pickFile() {
    // @ts-ignore
    this.$refs.image.click();
  }

  private onFilePicked(e: any) {
    const files = e.target.files;
    if (files[0] !== undefined) {
      this.fileName = files[0].name;
      if (this.fileName.lastIndexOf(".") <= 0) {
        return;
      }
      const fr = new FileReader();
      fr.readAsDataURL(files[0]);
      fr.addEventListener("load", () => {
        this.fileUrl = fr.result as string;
        this.file = files[0]; // this is an image file that can be sent to server...
      });
    } else {
      this.fileName = "";
      this.file = null;
      this.fileUrl = "";
    }
  }

  private async submit() {
    //@ts-ignore
    if (this.$refs.form.validate()) {
      if (this.fileName.includes(".pdf")) {
        if (new Date() < new Date("11/06/2019")) {
          this.showLoader();
          submitWork(this.$store.state.user.id, this.title, this.file)
            .then(result => {
              if (result.success) {
                this.hideLoader();
                this.dialog = false;
                this.$emit("submissionCompleted");
              }
            })
            .catch(err => {
              this.hideLoader();
              this.showServerErorNotification();
            });
        } else {
          this.showWarningNotification("As submissões foram encerradas.");
        }
      } else {
        this.showErrorNotification("Somente arquivos .pdf são permitidos.");
      }
    }
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
