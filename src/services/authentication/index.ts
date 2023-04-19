import Cognito from "@/cognito";
import store from "@/store";
import {
  CognitoUserSession,
  CognitoRefreshToken
} from "amazon-cognito-identity-js";

const auth = new Cognito();

export function logOut() {
  auth.logOut();
  store.dispatch("clearSession");
}

export function confirmUser(code: string) {
  return auth.confirmUser(code);
}

export function login(username: string, password: string) {
  return auth.authenticateUser(username, password);
}

export function resendCode() {
  return auth.resendCode();
}

export function getUser() {
  return auth.getCognitoUser();
}

export function setCognitoUser(username: string) {
  auth.setCognitoUser(username);
}

export function getSession(): Promise<CognitoUserSession> {
  return auth.getUserSession();
}

export function refreshSession(
  refreshToken: CognitoRefreshToken
): Promise<any | CognitoUserSession> {
  return auth.refreshSession(refreshToken);
}
