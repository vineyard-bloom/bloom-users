import * as React from 'react'
import { StateManager } from "../common/state-manager"
import { Password, PasswordConfirm, Username, Email, EthAddress } from "./components"
import { RegistrationUserFields } from "../login/types"

interface RegistrationOwnerState {
  userFields: RegistrationUserFields
}

export class RegistrationManager {
  stateOwner: React.Component<any, RegistrationOwnerState>

  constructor(stateOwner: React.Component<any, RegistrationOwnerState>) {
    this.stateOwner = stateOwner
  }

  onChange = e => {
    const target = e.target
    const userFields = Object.assign({}, this.stateOwner.state.userFields)
    userFields[target.name] = target.value
    this.stateOwner.setState({
      userFields: userFields
    })
  }

  createUsername() {
    const { username } = this.stateOwner.state.userFields
    return (
      <Username
        onChange={this.onChange}
        value={username}
      />
    )
  }

  createPassword() {
    const { password } = this.stateOwner.state.userFields
    return (
      <Password
        onChange={this.onChange}
        value={password}
      />
    )
  }

  createPasswordConfirm() {
    const { password, passwordConfirm } = this.stateOwner.state.userFields
    return (
      <PasswordConfirm
        onChange={this.onChange}
        value={passwordConfirm}
        password={password}
      />
    )
  }

  createEmail() {
    const { email } = this.stateOwner.state.userFields
    return (
      <Email
        onChange={this.onChange}
        value={email}
      />
    )
  }

  createEthPublicAddress() {
    const { ethPublicAddress } = this.stateOwner.state.userFields
    return (
      <EthAddress
        onChange={this.onChange}
        value={ethPublicAddress}
      />
    )
  }

  // createTwoFactorConfirm () {
  //   const { }
  // }

}