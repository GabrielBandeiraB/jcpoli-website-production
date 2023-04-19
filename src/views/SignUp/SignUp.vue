<template>
  <div class="py-5 view">
    <v-form ref="form" v-model="valid" @submit.prevent="addUser">
      <v-container class="form-container">
        <h6 class="title">Informações Pessoais</h6>
        <v-layout>
          <v-flex xs12 md6>
            <v-text-field :rules="requiredRule" v-model="form.firstName" label="Nome" required box></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              :rules="requiredRule"
              v-model="form.lastName"
              label="Sobrenome"
              required
              box
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-text-field :rules="emailRules" v-model="form.email" label="E-mail" required box></v-text-field>

        <v-layout>
          <v-flex xs12 md6>
            <v-text-field
              :rules="passwrodRules"
              v-model="form.password"
              label="Senha"
              type="password"
              required
              box
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              :rules="passwrodRules"
              v-model="secondPassword"
              label="Confirme a senha"
              type="password"
              required
              box
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12 md6>
           <v-text-field
              v-model="form.birthDate"
              label="Data de Nascimento"
              required
              mask="##/##/####"
              return-masked-value
              prepend-icon="event"
              box
              :rules="dateRules"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md6>
            <v-text-field
              v-model="form.phoneNumber"
              label="Telefone"
              :rules="requiredRule"
              required
              mask="(##) #####-####"
              prepend-icon="phone"
              box
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-autocomplete
          :items="institutionsNames"
          :label="'Instituições'"
          :rules="requiredRule"
          no-data-text="Nenhuma instituição encontrada."
          v-model="form.institution"
          box
        ></v-autocomplete>

        <h6 class="title">Endereço</h6>
        <v-layout>
          <v-flex xs12 md3>
            <v-text-field v-model="form.cep" label="CEP" required mask="#####-###" box></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12 md3>
            <v-autocomplete
              :items="siglas"
              v-model="selectedState"
              :label="'Estado'"
              :rules="requiredRule"
              no-data-text="Nenhum estado encontrado."
              box
            ></v-autocomplete>
          </v-flex>

          <v-flex xs12 md5>
            <v-autocomplete
              :items="cities"
              v-model="selectedCity"
              :label="'Cidade'"
              :rules="requiredRule"
              no-data-text="Nenhuma cidade encontrada."
              box
            ></v-autocomplete>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field
              v-model="form.neighborhood"
              label="Bairro"
              :rules="requiredRule"
              required
              box
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex xs12 md6>
            <v-text-field v-model="form.street" label="Rua" :rules="requiredRule" required box></v-text-field>
          </v-flex>

          <v-flex xs12 md2>
            <v-text-field
              v-model="form.streetNumber"
              label="Número"
              mask="#######"
              box
            ></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field v-model="form.complement" label="Complemento" box></v-text-field>
          </v-flex>
        </v-layout>

        <v-btn type="submit" color="success">Inscrever-se</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import SignUpForm from "@/models/forms/SignUpForm";
import Cognito from "@/cognito/index";
import {
  ValidationObserver,
  ValidationObserverInstance,
  install
} from "vee-validate";
import { getAdress, getStates, getCities } from "@/services/address";
import { Estado } from "@/services/models/adress";
import { getInstitutions } from "@/services/institutions";
import Institution from "@/services/models/institutions";
import { createUser } from "@/services/user";
import LoaderMixin from "@/mixins/loader";
import NotificationMixin from "@/mixins/notification";
import {
  setCognitoUser,
  logOut,
  getSession
} from "../../services/authentication";
import { CognitoUserSession } from "amazon-cognito-identity-js";

import moment from "moment";

@Component({
  components: {}
})
export default class SignUp extends mixins(LoaderMixin, NotificationMixin) {
  private form: SignUpForm;
  private cognito: Cognito;
  private valid: boolean;

  private menu: boolean = false;
  private date: string = "";
  private secondPassword: string = "";

  private requiredRule: any;
  private emailRules: any;
  private passwrodRules: any;
  private dateRules: any;

  private institutions: Institution[] = [];
  private institutionsNames: string[] = [];

  private states: Estado[] = [];
  private siglas: string[] = [];
  private selectedState: string;

  private cities: string[] = [];
  private selectedCity: string;

  constructor() {
    super();

    this.form = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthDate: "",
      phoneNumber: "",
      institution: "",
      type: "",
      cep: "",
      street: "",
      streetNumber: "",
      state: "",
      city: "",
      neighborhood: "",
      complement: ""
    };

    this.cognito = new Cognito();
    this.valid = true;

    this.selectedState = "";
    this.secondPassword = "";
    this.selectedCity = "";

    this.requiredRule = [
      // @ts-ignore
      v => !!v || "Campo obrigatório"
    ];

    this.emailRules = [
      // @ts-ignore
      v => !!v || "E-mail é obrigatório",
      // @ts-ignore
      v => /.+@.+/.test(v) || "Digite um email válido"
    ];

    this.passwrodRules = [
      // @ts-ignore
      v => !!v || "Campo obrigatório",
      // @ts-ignore
      v => (v && v.length >= 6) || "A senha deve conter pelo menos 6 caracteres"
    ];

    this.dateRules = [
      // @ts-ignore
      v => !!v || "Campo obrigatório",
      // @ts-ignore
      v => (v && v.length >= 10) || "Data inválida",
      // @ts-ignore
      v => moment(v, 'DD-MM-YYYY').isValid() || "Data inválida"
    ]
  }

  @Watch("form.cep")
  onCepChanged(value: string, oldValue: string) {
    if (value.length === 8) {
      this.populateFields();
    }
  }

  @Watch("selectedState")
  onSelectedStateChanged(value: string, oldValue: string) {
    if (value) {
      this.selectedCity = "";

      let codigoEstado = this.states.filter(state => state.sigla == value)[0]
        .id;

      this.showLoader();

      getCities(codigoEstado).then(cities => {
        this.cities = cities;

        this.selectedCity = this.form.city;
        this.hideLoader();
      });
    }
  }

  @Watch("selectedCity")
  onSelectedCityChanged(value: string, oldValue: string) {}

  created() {
    getStates().then(states => {
      this.states = states;
      this.siglas = states.map(state => state.sigla).sort();
    });
    getInstitutions().then(institutions => {
      this.institutions = institutions;
      this.institutionsNames = institutions.map(
        institution => institution.nome
      );
    });
  }

  private async addUser() {
    // @ts-ignore
    if (this.$refs.form.validate() && this.validatePassword()) {
      this.showLoader();

      this.signUp()
        .then(result => {
          result = result.data;
          if (result.success) {
            this.$store.dispatch("setUser", result.data);
            this.signUpCognito();
          } else {
            this.hideLoader();
            if (result.code === "user_exists") {
              this.showErrorNotification(
                "Já existe um usuário com este e-mail."
              );
            } else {
              this.showServerErorNotification();
            }
          }
        })
        .catch(err => {
          this.hideLoader();
          this.showServerErorNotification();
        });
    }
  }

  private signUpCognito() {
    this.cognito
      .signUp(this.form.email, this.form.password, {
        name: this.form.firstName,
        family_name: this.form.lastName,
        email: this.form.email.toLowerCase(),
        birthdate: this.parseDate(this.form.birthDate),
        phone_number: "+55" + this.form.phoneNumber,
        "custom:type": "user"
      })
      .then(async result => {
        setCognitoUser(this.form.email); //gambi

        logOut();

        this.$localStorage.set("userForm", JSON.stringify(this.form));

        this.hideLoader();

        this.$router.push("cadastro/confirmacao");
      })
      .catch(err => {
        this.hideLoader();

        if (err.code === "UsernameExistsException") {
          this.showErrorNotification("Já existe um usuário com este e-mail.");
        } else {
          this.showServerErorNotification();
        }
      });
  }

  private async signUp() {
    this.form.type = "user";
    return await createUser(this.form);
  }

  private populateFields(): void {
    this.showLoader();

    getAdress(this.form.cep).then(address => {
      this.form.street = address.logradouro;
      this.form.neighborhood = address.bairro;
      this.selectedState = address.uf;
      this.form.city = address.localidade;

      this.hideLoader();
    });
  }

  private parseDate(date: string): string {
    if (!date) {
      return null;
    }

    const [day, month, year] = date.split("/");

    return `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
  }
  private validatePassword(): boolean {
    if (this.form.password !== this.secondPassword) {
      this.showPasswordMismatchNotification();
      return false;
    }
    return true;
  }
}
</script>

<style>
.form-container {
  max-width: 700px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

label {
  font-weight: 500;
  float: left;
}


</style>
