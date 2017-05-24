import * as React from 'react'
import {FormControl, FormGroup, Button, Panel} from 'react-bootstrap'

export interface LoginProps {
  handleLogin
  handleChange
}

export class Login extends React.PureComponent<LoginProps, any> {

  render() {
    return (<div className='container vertical-center'>
        <Panel header={<h3 className='text-center'>Please Sign In</h3>} className='vertical-center'>
          <form onSubmit={this.props.handleLogin}>
            <FormGroup controlId='formBasicText'>
              <FormControl
                type='text'
                name='username'
                value={this.state.username}
                placeholder='Username'
                onChange={this.props.handleChange}
              />
              <FormControl
                type='password'
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.props.handleChange}
              />
              <FormControl
                type='password'
                name='twoFactor'
                value={this.state.twoFactor}
                placeholder='2FA Code'
                onChange={this.props.handleChange}
              />
            </FormGroup>
            <div className='text-center'>
              <Button type='submit' className='float-right'>
                Submit
              </Button>
            </div>
          </form>
        </Panel>
      </div>
    )
  }
}