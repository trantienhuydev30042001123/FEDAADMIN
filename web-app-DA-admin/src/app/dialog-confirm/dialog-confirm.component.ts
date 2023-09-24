import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogConfirm} from "./interfaces/DialogConfirm";

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public defaults: DialogConfirm,
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }

}
