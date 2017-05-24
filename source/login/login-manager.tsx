import {Login} from "./login-component";
import * as React from 'react'
import {LoginService} from "./login-service";
import {LoginUserFields} from "./types";

export interface LoginOwnerState {
  userFields: LoginUserFields
}

export interface UserService {
  login(username: string, password: string, twoFactor: string): Promise<void>
}

export class LoginManager {
  stateOwner: React.Component<any, LoginOwnerState>
  onSubmit
  constructor(stateOwner: React.Component<any, LoginOwnerState>, onSubmit) {
    this.stateOwner = stateOwner
    this.onSubmit = onSubmit
  }

  // onLogin = e => {
  //   e.preventDefault()
  //   return this.loginService.submit(this.getUserFields())
  // }

  getUserFields(): LoginUserFields {
    return this.stateOwner.state.userFields
  }

  onChange = e => {
    const target = e.target
    this.stateOwner.setState({
      [target.name]: target.value
    })
  }

  createLogin () {
    return <Login
      userFields={this.getUserFields()}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
    />
  }
}
