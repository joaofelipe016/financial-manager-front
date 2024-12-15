export class LoginResponse {
  accessToken: string;
  expiresIn: string;

  constructor(accessToken: string, expiresIn: string) {
    this.accessToken = accessToken;
    this.expiresIn = expiresIn;
  }
}
