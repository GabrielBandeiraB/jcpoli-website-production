<template>
  <div class="d-flex justify-content-center view confirm-view">
    <div class="container form-container">
      <v-form ref="form" v-model="valid" @submit.prevent="confirmUser">
        <div class="wrapper">
          <v-text-field
            :rules="[v => !!v || 'Campo obrigatório']"
            v-model="code"
            label="Código de verificação"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary">Confirmar</v-btn>
          <v-btn
            :loading="loading"
            :disabled="loading"
            color="success"
            @click="resendConfirmationCode"
            flat
          >
            Reenviar código
            <template v-slot:loader>
              <span>{{ counter }} segundos</span>
            </template>
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import SignUpForm from "@/models/forms/SignUpForm";
import Cognito from "@/cognito/index";
import NotificationMixin from "../../mixins/notification";
import { mixins } from "vue-class-component";
import LoaderMixin from "../../mixins/loader";
import {
  confirmUser,
  login,
  resendCode,
  getUser,
  setCognitoUser
} from "../../services/authentication";

@Component({
  components: {}
})
export default class Confirm extends mixins(NotificationMixin, LoaderMixin) {
  private code: string;
  private user: SignUpForm;
  private valid: boolean = false;

  private loading: boolean = false;
  private counter: number = 30;

  private email = "";

  constructor() {
    super();

    this.code = "";
  }

  private created() {
    this.email = this.$router.currentRoute.query.email as string;

    this.email && setCognitoUser(this.email);
  }

  private confirmUser() {
    // @ts-ignore
    if (this.$refs.form.validate()) {
      this.showLoader();

      confirmUser(this.code)
        .then(() => {
          this.user = JSON.parse(
            this.$localStorage.get("userForm")
          ) as SignUpForm;

          login(this.user.email, this.user.password)
            .then(userSession => {
              this.$store.commit("setUserSession", userSession);
              this.hideLoader();
              this.$router.push("/conta");
              this.showSuccessNotification("Inscrição realizada com sucesso.");
            })
            .catch(err => {
              this.hideLoader();
              this.showServerErorNotification();
            });
        })
        .catch(err => {
          if (err.code === "CodeMismatchException") {
            this.showErrorNotification("PIN inválido ou expirado.");
          } else {
            this.showServerErorNotification();
          }
          this.hideLoader();
        });
    }
  }

  private resendConfirmationCode() {
    resendCode()
      .then(() => this.disableButton())
      .catch(() => {
        this.showServerErorNotification();
      });
  }

  private disableButton() {
    this.loading = !this.loading;

    const interval = setInterval(() => (this.counter -= 1), 1000);

    setTimeout(() => {
      this.loading = false;
      this.counter = 0;
      clearInterval(interval);
    }, 1000 * 30);
  }
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

.wrapper {
  padding: 30px;
}

label {
  font-weight: 500;
  float: left;
}

.confirm-view {
  min-height: 768px !important;
}
</style>