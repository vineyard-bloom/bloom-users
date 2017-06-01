import * as React from 'react'
import {FormControl} from "react-bootstrap";

export interface FieldProps {
  onChange
  value: string
}

export class Username extends React.PureComponent<FieldProps, any> {
  render() {
    return (
      <FormControl
        type='text'
        name='username'
        value={this.props.value}
        onChange={this.props.onChange}
        bsSize='large'
        autoFocus
      />
    )
  }
}

export class Password extends React.PureComponent<FieldProps, any> {
  render() {
    return (
      <FormControl
        type='password'
        name='password'
        value={this.props.value}
        bsSize='large'
        onChange={this.props.onChange}
      />
    )
  }
}

export class PasswordConfirm extends React.PureComponent<FieldProps, any> {
  render() {
    return (
      <FormControl
        type='password'
        name='passwordConfirm'
        value={this.props.value}
        bsSize='large'
        onChange={this.props.onChange}
      />
    )
  }
}

export class Email extends React.PureComponent<FieldProps, any> {
  render() {
    return (
      <FormControl
        type='text'
        name='email'
        value={this.props.value}
        bsSize='large'
        onChange={this.props.onChange}
      />
    )
  }
}

export class EthAddress extends React.PureComponent<FieldProps, any> {
  render() {
    return (
      <FormControl
        type='text'
        name='ethPublicAddress'
        value={this.props.value}
        bsSize='large'
        onChange={this.props.onChange}
        autoFocus
      />
    )
  }
}

export class twoFactorPin extends React.PureComponent<FieldProps, any> {
  render () {
    return (
      <FormControl
        type='text'
        name='twoFactorConfirmCode'
        value={this.props.value}
        bsSize='large'
        onChange={this.props.onChange}
        autoFocus
      />
    )
  }
}
