import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {UntypedFormControl} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from "@angular/material/form-field";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {HelperService} from "../service/helper-service";
import {UserDTO} from "../dto/UserDTO";
import {SizeDTO} from "../dto/sizeDTO";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {DialogConfirm} from "../dialog-confirm/interfaces/DialogConfirm";
import {SizeCreateUpdateComponent} from "../size/size-create-update/size-create-update.component";
import {UserCreateUpdateComponent} from "./user-create-update/user-create-update.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class UserComponent implements OnInit{
  displayedColumns: string[] = ['id','action', 'name', 'username', 'email','roles'];
  user: UserDTO[] = [];
  constructor(private helperService: HelperService,
              private dialog: MatDialog,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) public id: number,) {
  }
  ngOnInit(): void {
    this.getData()
  }
  public getData(): void {
    this.helperService
      .getAll(
        "account"
      )
      .then((res: any) => {
        if (res) {
          this.user = res;
          for (let a of res) {
            let name = "";
            if (a.roles) {
              for (let b of a.roles) {
                if (b == a.roles[0]){
                  name += b.name;
                } else {
                  name += "," +  b.name;
                }
              }
              a.roles = name;
            }
          }
        }
      })
      .catch((error) => {
        console.log("loi")
      })
  }
  public deleteUser(row: UserDTO): void {
    let ids: string[] = [];
    ids.push(row.id);
    this.dialog.open(DialogConfirmComponent, {
      data: new DialogConfirm("Xóa người dùng", "Bạn có chắc chắn xóa người dùng ?", "warn"),
      disableClose: false,
      width: '350x'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {
        this.helperService
          .deleteById( "account",ids)
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
  createUser() {
    this.dialog.open(UserCreateUpdateComponent, {
      disableClose: true
    }).afterClosed().subscribe((user: UserDTO) => {
      if (user) {
        this.getData()
      }
    });
  }

  updateUser(row: UserDTO) {
    this.dialog
      .open(UserCreateUpdateComponent, {
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
