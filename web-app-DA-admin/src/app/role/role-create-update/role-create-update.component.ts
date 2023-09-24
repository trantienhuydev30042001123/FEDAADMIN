// @ts-nocheck
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SizeDTO} from "../../dto/sizeDTO";
import {RoleDTO} from "../../dto/RoleDTO";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HelperService} from "../../service/helper-service";

@Component({
  selector: 'app-role-create-update',
  templateUrl: './role-create-update.component.html',
  styleUrls: ['./role-create-update.component.css']
})
export class RoleCreateUpdateComponent implements OnInit{
  mode: 'create' | 'update' = 'create';
  form: FormGroup;
  defaults: RoleDTO;
  constructor(@Inject(MAT_DIALOG_DATA) public id: string,
              private dialogRef: MatDialogRef<RoleCreateUpdateComponent>,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private helperService: HelperService,) {
  }
  ngOnInit(): void {
    this.defaults = new RoleDTO();

    if (this.id ) {
      this.defaults.id = this.id;
      this.mode = 'update';
      this.getInfo();
      this.createForm();
    }
    else {
      this.createForm();
    }
  }
  save() {
    if (this.mode === 'create') {
      this.createRole();
    } else if (this.mode === 'update') {
      this.updateRole();
    }
  }
  isCreateRole() {
    return this.mode === 'create';
  }

  isUpdateRole() {
    return this.mode === 'update';
  }

  private createRole(): void {
    const role : RoleDTO = this.form.value;
    this.helperService.add(role, "role")
      .then(() => {
        let mess = "Thêm Thành Công!";
        console.log(mess)
        this.dialogRef.close(mess);
      }).catch(() => {
      console.log("loi")
    })
  }

  private updateRole(): void {
    const role: RoleDTO = this.form.value;
    this.helperService.update(role, "role", this.defaults.id)
      .then(() => {
        let mess = "Cập Nhật Thành Công!"
        console.log(mess)
        this.dialogRef.close(mess);
      }).catch(() => {
      console.log("loi")
    })
  }

  public getInfo(): void {
    this.helperService
      .findInfoById("role", this.defaults.id)
      .then((res: any) => {
        console.log(res)
        if (res) {
          this.defaults = res;
          // this.createForm();
        }
      })
      .catch((error) => {
        console.log(error)
      });
      // .finally(() => {
      // });
  }


  public trimData(fieldName, val: string): void {
    this.form.get(fieldName).setValue(val.trim());
  }
  private createForm(): void {
    this.form = this.fb.group({
      id: this.defaults.id || '',
      name: [this.defaults.name ||''],
    });
  }

}
