// @ts-nocheck
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {categoryDTO} from "../../dto/categoryDTO";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HelperService} from "../../service/helper-service";
import {productDTO} from "../../dto/ProductDTO";
import {RoleDTO} from "../../dto/RoleDTO";

@Component({
  selector: 'app-product-create-update',
  templateUrl: './product-create-update.component.html',
  styleUrls: ['./product-create-update.component.css']
})
export class ProductCreateUpdateComponent implements OnInit{
  mode: 'create' | 'update' = 'create';
  listCategorys: categoryDTO[] = [];
  form: FormGroup;
  defaults: productDTO;
  constructor(@Inject(MAT_DIALOG_DATA) public id: string,
              private dialogRef: MatDialogRef<ProductCreateUpdateComponent>,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private helperService: HelperService,) {
  }
  ngOnInit(): void {
    this.getListCategory();
    this.defaults = new productDTO();
    if (this.id ) {
      this.defaults.id = this.id;
      this.mode = 'update';
      this.getInfo();
      this.createForm();
    } else {
      this.createForm();
    }
  }
  save() {
    if (this.mode === 'create') {
      this.createProduct();
    } else if (this.mode === 'update') {
      this.updateProduct();
    }
  }
  isCreateProduct() {
    return this.mode === 'create';
  }

  isUpdateProduct() {
    return this.mode === 'update';
  }
  private createProduct(): void {
    const product : productDTO = this.form.value;
    this.helperService.add(product, "product")
      .then(() => {
        let mess = "Thêm Thành Công!";
        console.log(mess)
        this.dialogRef.close(mess);
      }).catch(() => {
      console.log("loi")
    })
  }

  private updateProduct(): void {
    const product: productDTO = this.form.value;
    this.helperService.update(product, "product", parseInt(this.defaults.id))
      .then(() => {
        let mess = "Cập Nhật Thành Công!"
        console.log(mess)
        this.dialogRef.close(mess);
      }).catch(() => {
      console.log("loi")
    })
  }
  private async getListCategory(): Promise<void> {
    await this.helperService
      .get("category")
      .then((res: any) => {

        this.listCategorys = res;
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  private async getInfo(): Promise<void> {
    await this.helperService
      .findInfoById(
        "product", parseInt(this.defaults.id)
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
  public trimData(fieldName, val: string): void {
    this.form.get(fieldName).setValue(val.trim());
  }
  private createForm(): void {
    this.form = this.fb.group({
      id: [this.defaults.id || ''],
      name: [this.defaults.name || '', Validators.required],
      image: [this.defaults.image || '', Validators.required],
      image2: [this.defaults.image2 || '', Validators.required],
      image3: [this.defaults.image3 || '', Validators.required],
      category: [this.defaults.category || '', Validators.required],
      price: [this.defaults.price || '', Validators.required],

    });
  }

}
