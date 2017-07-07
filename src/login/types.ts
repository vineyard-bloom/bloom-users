export interface LoginUserFields {
  username?: string
  password?: string
  twoFactorConfirmCode?: string
}

export interface RegistrationUserFields {
  username?: string
  password?: string
  passwordConfirm?: string
  email?: string
  ethPublicAddress?: string
  twoFactorConfirmCode?: string
}
