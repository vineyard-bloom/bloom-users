import * as React from 'react'
import {FormControl} from "react-bootstrap";

export interface FieldProps {
  onChange
  value: string
}

export class Username extends React.PureComponent<FieldProps, any> {

  render() {
    return <FormControl
      type='text'
      name='username'
      value={this.props.value}
      placeholder='Username'
      onChange={this.props.onChange}
      autoFocus
    />
  }

}

export class Password extends React.PureComponent<FieldProps, any> {

  render() {
    return <FormControl
      type='password'
      name='password'
      value={this.props.value}
      placeholder='Password'
      onChange={this.props.onChange}
      autoFocus
    />
  }

}

