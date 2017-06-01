import * as React from 'react'
import { FormControl, FormGroup, Button, Panel } from 'react-bootstrap'
import { LoginUserFields } from "./types";

export interface LoginProps {
  onChange
  onSubmit
  userFields: LoginUserFields
}

export class Login extends React.PureComponent<LoginProps, any> {

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.props.userFields)
  }

  render() {
    const userFields = this.props.userFields
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId='formBasicText'>
          <FormControl
            type='text'
            name='username'
            value={this.props.userFields.username}
            placeholder='Username'
            bsSize='large'
            onChange={this.props.onChange}
          />
        </FormGroup>
        <FormGroup controlId='formBasicText'>
          <FormControl
            type='password'
            name='password'
            value={this.props.userFields.password}
            placeholder='Password'
            bsSize='large'
            onChange={this.props.onChange}
          />
        </FormGroup>
        <FormGroup controlId='formBasicText'>
          <FormControl
            type='password'
            name='twoFactorConfirmCode'
            value={this.props.userFields.twoFactorConfirmCode}
            placeholder='2FA Code'
            bsSize='large'
            onChange={this.props.onChange}
          />
        </FormGroup>
        <div className='text-center'>
          <Button type='submit' className='btn-full' bsSize='large' bsStyle='success'>
            Submit
          </Button>
        </div>
      </form>
    )
  }
}
