<template>
  <v-layout class>
    <v-container class="form-container">
      <v-form ref="form" v-model="valid" @submit.prevent="login">
        <h6>Acesso</h6>
        <v-text-field :rules="emailRules" v-model="email" label="E-mail" required box></v-text-field>
        <v-text-field
          :rules="passwrodRules"
          v-model="password"
          label="Senha"
          type="password"
          persistent-hint
          required
          box
        ></v-text-field>
        <v-btn type="submit" color="primary">Acessar</v-btn>
        <v-btn flat color="indigo" @click="redirectSignUp">Não se inscreveu?</v-btn>
        <!-- <div class="row mt-2">
          <div class="col">
            <a @click="esqueciSenha">Esqueci minha senha</a>
          </div>
        </div>-->
      </v-form>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Cognito from "../cognito";
import { mixins } from "vue-class-component";
import LoaderMixin from "@/mixins/loader";
import NotificationMixin from "@/mixins/notification";
import { getUser } from "@/services/user";
import { getSession, refreshSession } from "../services/authentication";
import { CognitoUserSession } from "amazon-cognito-identity-js";

@Component
export default class Login extends mixins(LoaderMixin, NotificationMixin) {
  private valid: boolean = false;
  private emailRules: any;
  private passwrodRules: any;

  private email: string = "";
  private password: string = "";

  private cognito: Cognito;

  constructor() {
    super();

    this.cognito = new Cognito();

    this.emailRules = [
      // @ts-ignore
      v => !!v || "E-mail é obrigatório",
      // @ts-ignore
      v => /.+@.+/.test(v) || "Digite um email válido"
    ];

    this.passwrodRules = [
      // @ts-ignore
      v => !!v || "Campo obrigatório"
    ];
  }

  private login() {
    // @ts-ignore
    if (this.$refs.form.validate()) {
      this.showLoader();

      this.cognito
        .authenticateUser(this.email.toLowerCase(), this.password)
        .then(session => {
          getUser(session.getIdToken().payload["email"]).then(result => {
            if (result.success) {
              this.$store.dispatch("setSession", session);
              this.$store.dispatch("setUser", result.data);
              this.$router.push("/conta");
              this.hideLoader();
            } else {
              this.showServerErorNotification();
            }
          });
        })
        .catch(err => {
          if (err.code === "NotAuthorizedException") {
            this.showInvalidDataNotification();
          } else if (err.code === "UserNotFoundException") {
            this.showInvalidDataNotification();
          } else if (err.code === "UserNotConfirmedException") {
            this.$router.push({
              name: "confirmacao",
              query: {
                email: this.email
              }
            });
          } else {
            this.showServerErorNotification();
          }

          this.hideLoader();
        });
    }
  }

  private redirectSignUp() {
    this.$router.push("/cadastro");
  }

  private esqueciSenha() {
    this.showWarningNotification("Função indisponível");
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

h6 {
  font-size: 1.4em;
}
</style>

