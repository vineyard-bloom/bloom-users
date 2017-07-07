import { Login } from "./login-component";
import * as React from 'react'
import { LoginService } from "./login-service";
import { LoginUserFields } from "./types";
import { StateManager } from '../common/state-manager'

export interface LoginOwnerState {
  userFields: LoginUserFields
}

// export interface UserService {
//   login(username: string, password: string, twoFactor: string): Promise<void>
// }

export class LoginManager {
  stateOwner: React.Component<any, LoginOwnerState>
  onSubmit

  constructor(stateOwner: React.Component<any, LoginOwnerState>, onSubmit) {
    this.stateOwner = stateOwner
    this.onSubmit = onSubmit
  }

  getUserFields(): LoginUserFields {
    return this.stateOwner.state.userFields
  }

  onChange = e => {
    const target = e.target
    const userFields = Object.assign({}, this.stateOwner.state.userFields)
    userFields[target.name] = target.value
    this.stateOwner.setState({ 
      userFields: userFields
    })
  }

  createLogin () {
    return (
      <Login
        userFields={this.getUserFields()}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}
