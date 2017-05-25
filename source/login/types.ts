export interface LoginUserFields {
  username?: string
  password?: string
  twoFactor?: string
}

export interface RegistrationUserFields {
  username?: string
  password?: string
  passwordConfirm?: string
  email?: string
  ethPublicAddress?: string
  twoFactor?: string
}
