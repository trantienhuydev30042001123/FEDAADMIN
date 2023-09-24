// @ts-nocheck
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SizeDTO} from "../../dto/sizeDTO";
import {UserDTO} from "../../dto/UserDTO";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HelperService} from "../../service/helper-service";
import {RoleDTO} from "../../dto/RoleDTO";

@Component({
  selector: 'app-user-create-update',
  templateUrl: './user-create-update.component.html',
  styleUrls: ['./user-create-update.component.css']
})
export class UserCreateUpdateComponent implements OnInit {
  listroles: RoleDTO[] = [];
  selectedRoleNames: string[] = ["admin","user"];

  mode: 'create' | 'update' = 'create';
  form: FormGroup;
  defaults: UserDTO;

  constructor(@Inject(MAT_DIALOG_DATA) public id: string,
              private dialogRef: MatDialogRef<UserCreateUpdateComponent>,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private helperService: HelperService,) {
  }

  ngOnInit(): void {
    this.getListRole();
    this.defaults = new UserDTO();
    if (this.id) {
      this.defaults.id = this.id;
      this.mode = 'update';
      this.getInfo();
      this.createForm();

    } else {
      this.createForm();
    }

    if (this.mode === 'update'){
      this.selectedRoleIds = this.defaults.roles.map(role => role.id);
    }
  }

  save() {
    if (this.mode === 'create') {
      this.createUser();
    } else if (this.mode === 'update') {
      this.updateUser();
    }
  }

  isCreateUser() {
    return this.mode === 'create';
  }

  isUpdateUser() {
    return this.mode === 'update';
  }

  private createUser(): void {
    const user: UserDTO = this.form.value;
    this.helperService.add(user, "account")
      .then(() => {
        let mess = "Thêm Thành Công!";
        console.log(mess)
        this.dialogRef.close(mess);
      }).catch(() => {
      console.log("loi")
    })
  }

  private updateUser(): void {
    const user: UserDTO = this.form.value;
    this.helperService.update(user, "account", this.defaults.id)
      .then(() => {
        let mess = "Cập Nhật Thành Công!"
        console.log(mess)
        this.dialogRef.close(mess);
      }).catch(() => {
      console.log("loi")
    })
  }

  private async getInfo(): Promise<void> {
    await this.helperService
      .findInfoById(
        "account", this.defaults.id
      )
      .then((res: any) => {
        console.log(res)
        if (res) {
          this.defaults = res;
          this.createForm();
        }
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  private async getListRole(): Promise<void> {
    await this.helperService
      .get("account/roles")
      .then((res: any) => {

        this.listroles = res;
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  public trimData(fieldName, val: string): void {
    this.form.get(fieldName).setValue(val.trim());
  }

  private createForm(): void {
    this.form = this.fb.group({
      id: this.defaults.id || '',
      name: [this.defaults.name || ''],
      username: [this.defaults.username || ''],
      email: [this.defaults.email || ''],
      roles: [this.defaults.roles || ''],

    });
  }


}
