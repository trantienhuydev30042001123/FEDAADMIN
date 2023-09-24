import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-fail',
  templateUrl: './login-fail.component.html',
  styleUrls: ['./login-fail.component.css']
})
export class LoginFailComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginFailComponent>
  ) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
