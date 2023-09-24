// @ts-nocheck
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from "@angular/material/form-field";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HelperService} from "../../service/helper-service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SizeDTO} from "../../dto/sizeDTO";

@Component({
  selector: 'app-size-create-update',
  templateUrl: './size-create-update.component.html',
  styleUrls: ['./size-create-update.component.css'],
  // providers: [
  //   {
  //     provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  //     useValue: {
  //       appearance: "standard",
  //     }
  //   },
  // ],
})
export class SizeCreateUpdateComponent implements OnInit{
  mode: 'create' | 'update' = 'create';
  form: FormGroup;
  defaults: SizeDTO;
  constructor(@Inject(MAT_DIALOG_DATA) public id: string,
              private dialogRef: MatDialogRef<SizeCreateUpdateComponent>,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private helperService: HelperService,) {
  }
  ngOnInit(): void {
    this.defaults = new SizeDTO();
    if (this.id ) {
      this.defaults.id = this.id;
      this.createForm();
      this.mode = 'update';
      this.getInfo();
    } else {
      this.createForm();
    }
  }
  save() {
    if (this.mode === 'create') {
      this.createSize();
    } else if (this.mode === 'update') {
      this.updateSize();
    }
  }
  isCreateSize() {
    return this.mode === 'create';
  }

  isUpdateSize() {
    return this.mode === 'update';
  }

  private createSize(): void {
    const size : SizeDTO = this.form.value;
      this.helperService.add(size, "size")
        .then(() => {
          let mess = "Thêm Thành Công!";
          console.log(mess)
          this.dialogRef.close(mess);
        }).catch(() => {
        console.log("loi")
      })
}

  private updateSize(): void {
      const size: SizeDTO = this.form.value;
      this.helperService.update(size, "size", this.defaults.id)
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
        "size", this.defaults.id
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
      id: this.defaults.id || '',
      size: [this.defaults.size ||''],
    });
  }
}
