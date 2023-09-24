export class SignUp {
  name: String;
  username: String;
  email: String;
  password: String;
  roles: String[];

  constructor(name: String, username: String, email: String, password: String) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ['admin'];
  }
}
//
//   get name(): String {
//     return this.name;
//   }
//
//   set name(value: String) {
//     this.name = value;
//   }
//
//   get username(): String {
//     return this.username;
//   }
//
//   set username(value: String) {
//     this.username = value;
//   }
//
//   get email(): String {
//     return this.email;
//   }
//
//   set email(value: String) {
//     this.email = value;
//   }
//
//   get password(): String {
//     return this._password;
//   }
//
//   set password(value: String) {
//     this.password = value;
//   }
//
//   get roles(): String[] {
//     return this.roles;
//   }
//
//   set roles(value: String[]) {
//     this.roles = value;
//   }
// }
