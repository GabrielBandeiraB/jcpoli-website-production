import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
  CognitoRefreshToken
} from "amazon-cognito-identity-js";
import AttributeList from "./models/attributes";

export default class Cognito {
  private poolData = {
    UserPoolId: process.env.VUE_APP_USER_POOL_ID,
    ClientId: process.env.VUE_APP_CLIENT_ID
  };

  private userPool: CognitoUserPool;
  private cognitoUser: CognitoUser;

  constructor() {
    this.userPool = new CognitoUserPool(this.poolData);
  }

  public setCognitoUser(username: string) {
    const userData = {
      Username: username,
      Pool: this.userPool
    };

    this.cognitoUser = new CognitoUser(userData);
  }

  public signUp(
    username: string,
    password: string,
    attributeList: AttributeList
  ): Promise<CognitoUser> {
    return new Promise((resolve, reject) => {
      this.userPool.signUp(
        username,
        password,
        this.getAttributeList(attributeList),
        null,
        (err, result) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(result.user);
        }
      );
    });
  }

  public confirmUser(code: string): Promise<any> {
    this.cognitoUser = this.cognitoUser || this.userPool.getCurrentUser();
    return new Promise((resolve, reject) => {
      this.cognitoUser.confirmRegistration(code, true, err => {
        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }

  public resendCode(): Promise<boolean> {
    this.cognitoUser = this.cognitoUser || this.userPool.getCurrentUser();

    return new Promise((resolve, reject) => {
      this.cognitoUser.resendConfirmationCode((err: Error) => {
        if (err) {
          reject(false);
        }

        resolve(true);
      });
    });
  }

  public authenticateUser(
    username: string,
    password: string
  ): Promise<CognitoUserSession> {
    const userData = {
      Username: username,
      Pool: this.userPool
    };

    this.cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      this.cognitoUser.authenticateUser(
        this.getAuthenticationDetails(username, password),
        {
          onSuccess: result => {
            resolve(result);
          },
          onFailure: err => {
            reject(err);
          }
        }
      );
    });
  }

  public logOut() {
    this.cognitoUser = this.cognitoUser || this.userPool.getCurrentUser();
    this.cognitoUser && this.cognitoUser.signOut();
  }

  public getUserSession(): Promise<any> {
    this.cognitoUser = this.cognitoUser || this.userPool.getCurrentUser();

    return new Promise((resolve, reject) => {
      if (this.cognitoUser) {
        this.cognitoUser.getSession((err: any, session: CognitoUserSession) => {
          if (err) {
            reject(err);
          }
          resolve(session);
        });
      } else {
        reject();
      }
    });
  }

  public refreshSession(
    refreshToken: CognitoRefreshToken
  ): Promise<any | CognitoUserSession> {
    this.cognitoUser = this.cognitoUser || this.userPool.getCurrentUser();

    return new Promise((resolve, reject) => {
      this.cognitoUser.refreshSession(
        refreshToken,
        (err: any, session: CognitoUserSession) => {
          if (err) {
            reject(err);
          }

          resolve(session);
        }
      );
    });
  }

  public getCognitoUser() {
    return this.userPool.getCurrentUser();
  }

  private getAuthenticationDetails(
    username: string,
    password: string
  ): AuthenticationDetails {
    const authData = {
      Username: username,
      Password: password
    };

    return new AuthenticationDetails(authData);
  }

  private getAttributeList(
    attributeList: AttributeList
  ): CognitoUserAttribute[] {
    return Object.keys(attributeList).map(key => {
      const value = attributeList[key as keyof AttributeList];
      return new CognitoUserAttribute({
        Name: key,
        Value: value
      });
    });
  }
}
