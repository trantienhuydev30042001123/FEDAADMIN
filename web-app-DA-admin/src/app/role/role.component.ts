import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {SizeDTO} from "../dto/sizeDTO";
import {RoleDTO} from "../dto/RoleDTO";
import {HelperService} from "../service/helper-service";
import {Router} from "@angular/router";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {DialogConfirm} from "../dialog-confirm/interfaces/DialogConfirm";
import {SizeCreateUpdateComponent} from "../size/size-create-update/size-create-update.component";
import {RoleCreateUpdateComponent} from "./role-create-update/role-create-update.component";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class RoleComponent implements OnInit{
  role: RoleDTO[] = [];
  displayedColumns: string[] = ['id','action', 'name'];
  constructor(private helperService: HelperService,
              private dialog: MatDialog,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public id: number,) {
  }
  ngOnInit(): void {
    this.getData();
  }
  public getData(): void {
    this.helperService
      .getAll(
        "role"
      )
      .then((res: any) => {
        if (res) {
          this.role = res;
        }
      })
      .catch((error) => {
        console.log("loi")
      })
  }
  public deleteRole(row: RoleDTO): void {
    let ids: string[] = [];
    ids.push(row.id);
    this.dialog.open(DialogConfirmComponent, {
      data: new DialogConfirm("Xóa vai trò", "Bạn có chắc chắn xóa vai trò ?", "warn"),
      disableClose: false,
      width: '350x'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {
        this.helperService
          .deleteById( "role",ids)
          .then(() => {
            let mess = "Xoá Thành Công!";
            console.log(mess)
            this.getData();
          })
          .catch((error) => {
            console.log(error)
          })
      }
    });
  }
  createRole() {
    this.dialog.open(RoleCreateUpdateComponent, {
      disableClose: true
    }).afterClosed().subscribe((role: RoleDTO) => {
      if (role) {
        this.getData()
      }
    });
  }

  updateRole(row: RoleDTO) {
    this.dialog
      .open(RoleCreateUpdateComponent, {
        data: row.id,
        autoFocus: false
      })
      .afterClosed()
      .subscribe((mess) => {
        if (mess) {
          this.getData();
        }
      });
  }

}
