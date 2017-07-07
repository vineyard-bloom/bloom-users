// export interface UserLogin {
//   getUsername(): string
//   setUsername(value: string)
//
//   getPassword(): string
//   setPassword(value: string)
//
//   getTwoFactorToken(): string
//   setTwoFactortoken(value: string)
// }
//
// export class User implements UserLogin {
//   private username: string
//   private password: string
//   private twoFactorToken: string
//
//   getUsername(): string {
//     return this.username
//   }
//
//   setUsername(value: string) {
//     this.username = value
//   }
//
//   getPassword(): string {
//     return this.password
//   }
//
//   setPassword(value: string) {
//     this.password = value
//   }
//
//   getTwoFactorToken(): string {
//     return this.twoFactorToken
//   }
//
//   setTwoFactortoken(value: string) {
//     this.twoFactorToken = value
//   }
// }

import {Property, SimpleProperty} from "bloom-grafting"

export interface UserLogin {
  username: Property<string>
  password: Property<string>
  twoFactorToken: Property<string>
}

export class User implements UserLogin {
  username: SimpleProperty<string>
  password: SimpleProperty<string>
  twoFactorToken: SimpleProperty<string>
}