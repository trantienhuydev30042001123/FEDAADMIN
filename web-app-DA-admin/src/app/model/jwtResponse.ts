export class JwtResponse{
  public token: string;
  public name: string;
  public roles: any;

  constructor(token: string, name: string, roles: any) {
    this.token = token;
    this.name = name;
    this.roles = roles;
  }
}
