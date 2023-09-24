import { Component } from '@angular/core';
import {sample} from "rxjs";
import {Router} from "@angular/router";
import {SignIn} from "../model/SignIn";
import {AuthService} from "../service/auth.service";
import {TokenService} from "../service/token.service";
import {LoginFailComponent} from "./login-fail/login-fail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  signIn: SignIn;
  form: any = {};

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router,
              private dialog: MatDialog) {
  }
  ngOnInit(): void{}
  ngSubmit() {
    this.signIn = new SignIn(
      this.form.username,
      this.form.password
    )
    // this.authService.signIn(this.signIn).subscribe( data=>{
    //   if (data.token!=undefined){
    //     this.tokenService.setToken(data.token);
    //     this.tokenService.setName(data.name);
    //     this.tokenService.setRole(data.roles);
    //     this.router.navigate(['dashboard']);
    //   }
    // })

    this.authService.signIn(this.signIn).subscribe(
      data => {
        if (data.token != undefined) {
          this.tokenService.setToken(data.token);
          this.tokenService.setName(data.name);
          this.tokenService.setRole(data.roles);
          this.router.navigate(['dashboard']);
        } else {
          this.openErrorDialog('Đăng nhập thất bại', 'Tên đăng nhập hoặc mật khẩu không đúng.');
        }
      },
      error => {
        console.error('Lỗi khi đăng nhập:', error);
        this.openErrorDialog('Lỗi khi đăng nhập', 'Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.');
      }
    );

  }

  openErrorDialog(title: string, message: string) {
    this.dialog.open(LoginFailComponent, {
      data: { title, message },
      width: '400px' // Tùy chỉnh kích thước dialog
    });
  }
}
