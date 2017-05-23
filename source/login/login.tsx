import * as React from 'react'

export interface LoginProps {

}

export class Login extends React.PureComponent<LoginProps, any> {

  handleLogin = (e) => {
    e.preventDefault()
    return this.props.userService.login(this.state.username, this.state.password, this.state.twoFactor)
  }

  handleChange = (e) => {
    const target = e.target
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    return (<div className='container vertical-center'>
        <Panel header={<h3 className='text-center'>Please Sign In</h3>} className='vertical-center'>
          <form onSubmit={this.handleLogin}>
            <FormGroup controlId='formBasicText'>
              <FormControl
                type='text'
                name='username'
                value={this.state.username}
                placeholder='Username'
                onChange={this.handleChange}
              />
              <FormControl
                type='password'
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.handleChange}
              />
              <FormControl
                type='password'
                name='twoFactor'
                value={this.state.twoFactor}
                placeholder='2FA Code'
                onChange={this.handleChange}
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