import * as React from 'react'
import {FormGroup, FormControl} from 'react-bootstrap'
import {Property} from "bloom-grafting"

export interface FieldProps {
  property: Property<string>
  name: string
  placeholder?: string
}

export class Field extends React.PureComponent<FieldProps, void> {

  render() {
    const {property, name} = this.props
    const placeholder = this.props.placeholder || name[0].toUpperCase() + name.substr(1)
    return (
      <FormGroup controlId='formBasicText'>
        <FormControl
          type='text'
          name={name}
          value={property.get()}
          placeholder={placeholder}
          bsSize='large'
          onChange={e => property.set(e.target.value)}
        />
      </FormGroup>
    )
  }
}

export interface FieldChildProps {
  property: Property<string>
  placeholder?: string
}

export class UsernameField extends React.PureComponent<FieldChildProps, void> {

  render() {
    const {property, placeholder} = this.props
    return (
      <Field name="username" property={property} placeholder={placeholder} />
    )
  }
}

export class PasswordField extends React.PureComponent<FieldChildProps, void> {

  render() {
    const {property} = this.props
    const placeholder = this.props.placeholder || '2-Step Verification Code'
    return (
      <Field name="password" property={property} placeholder={placeholder} />
    )
  }
}

export class TwoFactorTokenField extends React.PureComponent<FieldChildProps, void> {

  render() {
    const {property, placeholder} = this.props
    return (
      <Field name="twoFactorToken" property={property} placeholder={placeholder} />
    )
  }
}