import {Login} from "./login-component";
import * as React from 'react'

export interface UserService {
  login(username: string, password: string, twoFactor: string): Promise<void>
}

export class LoginManager {
  stateOwner: React.Component<any, any>
  userService: UserService

  constructor(stateOwner: React.Component<any, any>, userService: UserService) {
    this.stateOwner = stateOwner
  }

  handleLogin = e => {
    e.preventDefault()
    const state = this.stateOwner.state
    return this.userService.login(
      state.username,
      state.password,
      state.twoFactor
    )
  }

  handleChange = e => {
    const target = e.target
    this.stateOwner.setState({
      [target.name]: target.value
    })
  }

  createComponent() {
    return React.createElement(Login, {
      handleChange: this.handleChange,
      handleLogin: this.handleLogin
    }, null)
  }
}
