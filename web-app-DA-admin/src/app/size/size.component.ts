import {Component, Inject, OnInit} from '@angular/core';
import {SizeDTO} from "../dto/sizeDTO";
import {HelperService} from "../service/helper-service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {DialogConfirm} from "../dialog-confirm/interfaces/DialogConfirm";
import {ReplaySubject} from "rxjs";
import {SizeCreateUpdateComponent} from "./size-create-update/size-create-update.component";
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})

export class SizeComponent implements OnInit{
  subject$: ReplaySubject<SizeDTO[]> = new ReplaySubject<SizeDTO[]>(1);
  displayedColumns: string[] = ['id','action', 'size'];
  sizes: SizeDTO[];
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
        "size"
      )
      .then((res: any) => {
        if (res) {
          this.sizes = res;
        }
      })
      .catch((error) => {
        console.log("loi")
      })
  }
  public deleteSize(row: SizeDTO): void {
    let ids: string[] = [];
    ids.push(row.id);
    this.dialog.open(DialogConfirmComponent, {
      data: new DialogConfirm("Xóa kích thước", "Bạn có chắc chắn xóa kích thước ?", "warn"),
      disableClose: false,
      width: '350x'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {
        this.helperService
          .deleteById( "size",ids)
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
  createSize() {
    this.dialog.open(SizeCreateUpdateComponent, {
      disableClose: true
    }).afterClosed().subscribe((size: SizeDTO) => {
      if (size) {
        this.getData()
      }
    });
  }

  updateSize(row: SizeDTO) {
    this.dialog
      .open(SizeCreateUpdateComponent, {
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
