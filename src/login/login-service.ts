import {LoginUserFields} from "./types";

export interface LoginService {
  submitLogin(userFields: LoginUserFields): Promise<void>
}

export class StandardLoginService implements LoginService {

  submitLogin(userFields: LoginUserFields): Promise<void> {
    return null;
  }
}
