import {LoginUserFields} from "./types";

export interface LoginService {
  submit(info: LoginUserFields): Promise<void>
}

export class StandardLoginService implements LoginService {

  submit(info: LoginUserFields): Promise<void> {
    return null;
  }
}