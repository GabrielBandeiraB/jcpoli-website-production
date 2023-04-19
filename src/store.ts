import Vue from "vue";
import Vuex from "vuex";
import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

interface IUser {
  id: number;
  name: string;
  family_name: string;
  email: string;
  institution: string;
  birth_date: Date;
  subscribed: boolean;
  created_at: Date;
  street: string;
  street_number: number;
  complement: string;
  cep: string;
  neighborhood: string;
  state: string;
  city: string;
  type: string;
}

interface CustomStore {
  user?: IUser;
  userSession?: CognitoUserSession;
}

export default new Vuex.Store<CustomStore>({
  state: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUserSession(state, session) {
      state.userSession = session;
    },
    clearUserSession(state) {
      state.userSession = null;
    },
    clearUser(state) {
      state.user = null;
    }
  },
  actions: {
    setSession(context, session) {
      context.commit("setUserSession", session);
    },
    setUser(context, user) {
      context.commit("setUser", user);
    },
    clearSession(context) {
      context.commit("clearUserSession");
      context.commit("clearUser");
    }
  },
  plugins: [
    createPersistedState({
      key: "jcecec"
    })
  ]
});
