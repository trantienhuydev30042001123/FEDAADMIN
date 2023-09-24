import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {SizeDTO} from "../dto/sizeDTO";
import {categoryDTO} from "../dto/categoryDTO";
import {HelperService} from "../service/helper-service";
import {Router} from "@angular/router";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {DialogConfirm} from "../dialog-confirm/interfaces/DialogConfirm";
import {SizeCreateUpdateComponent} from "../size/size-create-update/size-create-update.component";
import {CategoryCreateUpdateComponent} from "./category-create-update/category-create-update.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class CategoryComponent implements OnInit{
  category: categoryDTO[] = [];
  displayedColumns: string[] = ['id','action', 'name','description'];
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
        "category"
      )
      .then((res: any) => {
        if (res) {
          this.category = res;
        }
      })
      .catch((error) => {
        console.log("loi")
      })
  }
  public deleteCategory(row: categoryDTO): void {
    let ids: string[] = [];
    ids.push(row.id);
    this.dialog.open(DialogConfirmComponent, {
      data: new DialogConfirm("Xóa loại sản phẩm ", "Bạn có chắc chắn xóa loại sản phẩm ?", "warn"),
      disableClose: false,
      width: '350x'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {
        this.helperService
          .deleteById( "category",ids)
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
  createCategory() {
    this.dialog.open(CategoryCreateUpdateComponent, {
      disableClose: true
    }).afterClosed().subscribe((category: categoryDTO) => {
      if (category) {
        this.getData()
      }
    });
  }

  updateCategory(row: categoryDTO) {
    this.dialog
      .open(CategoryCreateUpdateComponent, {
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
