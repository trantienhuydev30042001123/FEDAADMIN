// @ts-nocheck
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SizeDTO} from "../../dto/sizeDTO";
import {categoryDTO} from "../../dto/categoryDTO";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HelperService} from "../../service/helper-service";

@Component({
  selector: 'app-category-create-update',
  templateUrl: './category-create-update.component.html',
  styleUrls: ['./category-create-update.component.css']
})
export class CategoryCreateUpdateComponent implements OnInit{
  mode: 'create' | 'update' = 'create';
  form: FormGroup;
  defaults: categoryDTO;
  constructor(@Inject(MAT_DIALOG_DATA) public id: string,
              private dialogRef: MatDialogRef<CategoryCreateUpdateComponent>,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private helperService: HelperService,) {
  }
  ngOnInit(): void {
    this.defaults = new categoryDTO();
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
      this.createCategory();
    } else if (this.mode === 'update') {
      this.updateCategory();
    }
  }
  isCreateCategory() {
    return this.mode === 'create';
  }

  isUpdateCategory() {
    return this.mode === 'update';
  }

  private createCategory(): void {
    const category : categoryDTO = this.form.value;
    this.helperService.add(category, "category")
      .then(() => {
        let mess = "Thêm Thành Công!";
        console.log(mess)
        this.dialogRef.close(mess);
      }).catch(() => {
      console.log("loi")
    })
  }

  private updateCategory(): void {
    const category: categoryDTO = this.form.value;
    this.helperService.update(category, "category", this.defaults.id)
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
        "category", this.defaults.id
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
      description: [this.defaults.description || '', Validators.required],
    });
  }
}
