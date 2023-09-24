import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogConfirmComponent} from "./dialog-confirm.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class DialogConfirmModule { }
