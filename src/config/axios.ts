import axios from "axios";
import { getSession, refreshSession } from "@/services/authentication";
import { CognitoUserSession } from "amazon-cognito-identity-js";

const instance = axios.create();

instance.interceptors.request.use(async config => {
  const session = await getSession();

  if (session instanceof CognitoUserSession) {
    if (session.isValid()) {
      config.headers.Authorization = session.getAccessToken().getJwtToken();
    } else {
      const newSession = await refreshSession(session.getRefreshToken());

      if (newSession instanceof CognitoUserSession) {
        config.headers.Authorization = newSession
          .getAccessToken()
          .getJwtToken();
      }
    }
  }

  return config;
});

export default instance;
