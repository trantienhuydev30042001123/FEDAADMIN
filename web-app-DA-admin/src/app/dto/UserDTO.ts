import {RoleDTO} from "./RoleDTO";


export class UserDTO {
  constructor(id: string, name: string, username: string, email: string, avatar: string, roles: RoleDTO[]) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.avatar = avatar;
    this.roles = roles;
  }
  id: string;
  name: string;
  username: string;
  email:string;
  avatar:string;
  roles: RoleDTO[];
}
