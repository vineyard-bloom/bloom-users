import {Login} from "./login-component";
import * as React from 'react'

export class LoginManager {
  stateOwner
  constructor(owner) {
    this.stateOwner = owner
  }

  handleChange = (e) => {
    const target = e.target
    this.stateOwner.setState({
      [target.name]: target.value
    })
  }

  createComponent() {
    return React.createElement(Login, null)
  }
}
