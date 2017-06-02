import * as React from 'react'
import { FormControl, FormGroup } from "react-bootstrap";

export interface FieldProps {
  onChange
  value: string
}

export interface PasswordConfirmProps {
  onChange
  value: string
  password: string
}

export class Username extends React.PureComponent<FieldProps, any> {
  validateUsername:() => any = () => {
    const len = this.props.value.length
    if (len > 2) {
      return 'success'
    }
  }

  render() {
    return (
      <FormGroup controlId='formRegisterUsername' validationState={this.validateUsername()}>
        <label>Username</label>
        <FormControl
          type='text'
          name='username'
          value={this.props.value}
          onChange={this.props.onChange}
          bsSize='large'
          autoFocus
        />
      </FormGroup>
    )
  }
}

export class Password extends React.PureComponent<FieldProps, any> {
  validatePassword:() => any = () => {
    const len = this.props.value.length
    if (len >= 8) {
      return 'success'
    }
  }
  render() {
    return (
      <FormGroup controlId='formRegisterPassword' validationState={this.validatePassword()}>
        <label>Password</label>
        <FormControl
          type='password'
          name='password'
          value={this.props.value}
          bsSize='large'
          onChange={this.props.onChange}
        />
      </FormGroup>
    )
  }
}

export class PasswordConfirm extends React.PureComponent<PasswordConfirmProps, any> {
  validatePassConf:() => any = () => {
    const len = this.props.value.length
    if (len > 4) {
      return 'success'
    }
  }
  render() {
    return (
      <FormGroup controlId='formRegisterPassConf' validationState={this.validatePassConf()}>
        <label>Confirm Password</label>
        <FormControl
          type='password'
          name='passwordConfirm'
          value={this.props.value}
          bsSize='large'
          onChange={this.props.onChange}
        />
      </FormGroup>
    )
  }
}

export class Email extends React.PureComponent<FieldProps, any> {
  validateEmail:() => any = () => {
    const email = this.props.value
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(email)) {
      return 'success'
    }
  }
  render() {
    return (
      <FormGroup controlId='formRegisterEmail' validationState={this.validateEmail()}>
        <label>Email</label>
        <FormControl
          type='text'
          name='email'
          value={this.props.value}
          bsSize='large'
          onChange={this.props.onChange}
        />
      </FormGroup>
    )
  }
}

export class EthAddress extends React.PureComponent<FieldProps, any> {
  validateEth:() => any = () => {
    const len = this.props.value.length
    if (len) {
      return 'success'
    }
  }
  render() {
    return (
      <FormGroup controlId='formRegisterEth' validationState={this.validateEth()}>
        <label>ETH Public Address</label>
        <FormControl
          type='text'
          name='ethPublicAddress'
          value={this.props.value}
          bsSize='large'
          onChange={this.props.onChange}
          autoFocus
        />
      </FormGroup>
    )
  }
}

export class twoFactorPin extends React.PureComponent<FieldProps, any> {
  validateTwoFactor:() => any = () => {
    const len = this.props.value.length
    if (len > 4) {
      return 'success'
    }
  }
  render() {
    return (
      <FormGroup controlId='formRegisterTwoFactor' validationState={this.validateTwoFactor()}>
        <label>Two Factor Confirmation Code</label>
        <FormControl
          type='text'
          name='twoFactorConfirmCode'
          value={this.props.value}
          bsSize='large'
          onChange={this.props.onChange}
          autoFocus
        />
      </FormGroup>
    )
  }
}
