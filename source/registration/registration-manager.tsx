import * as React from 'react'
import {StateManager} from "../common/state-manager"
import {Password, Username} from "./components";
import {RegistrationUserFields} from "../login/types";

export interface RegistrationState {
  userFields:RegistrationUserFields
}

export class RegistrationManager extends StateManager<RegistrationState> {

  constructor(stateOwner: React.Component<any, RegistrationState>) {
    super(stateOwner)
  }

  createUsername() {
    return <Username
      onChange={this.onChange}
      value={this.getState().userFields.username}
    />
  }

  createPassword() {
    return <Password
      onChange={this.onChange}
      value={this.getState().userFields.password}
    />
  }
}