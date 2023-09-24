import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {SizeDTO} from "../dto/sizeDTO";
import {productDTO} from "../dto/ProductDTO";
import {HelperService} from "../service/helper-service";
import {Router} from "@angular/router";
import {categoryDTO} from "../dto/categoryDTO";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {DialogConfirm} from "../dialog-confirm/interfaces/DialogConfirm";
import {CategoryCreateUpdateComponent} from "../category/category-create-update/category-create-update.component";
import {ProductCreateUpdateComponent} from "./product-create-update/product-create-update.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
})
export class ProductComponent implements OnInit {
  product: productDTO[] = [];
  displayedColumns: string[] = ['id','action', 'name','discount','image','image2','image3','price','category'];
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
        "product"
      )
      .then((res: any) => {
        if (res) {
          this.product = res;
          for (let a of res) {
            let name = "";
            if (a.category) {
              const b = a.category
              name = b.name
            }
            a.category = name;
          }
        }
      })
      .catch((error) => {
        console.log("loi")
      })
  }
  public deleteProduct(row: productDTO): void {
    let ids: string[] = [];
    ids.push(row.id);
    this.dialog.open(DialogConfirmComponent, {
      data: new DialogConfirm("Xóa sản phẩm ", "Bạn có chắc chắn xóa sản phẩm ?", "warn"),
      disableClose: false,
      width: '350x'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {
        this.helperService
          .deleteById( "product",ids)
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
  createProduct() {
    this.dialog.open(ProductCreateUpdateComponent, {
      disableClose: true
    }).afterClosed().subscribe((product: productDTO) => {
      if (product) {
        this.getData()
      }
    });
  }

  updateProduct(row: productDTO) {
    this.dialog
      .open(ProductCreateUpdateComponent, {
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
