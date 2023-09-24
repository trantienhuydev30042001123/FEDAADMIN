import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  isLoggedIn = false;

  canActivate(): boolean {
    // Kiểm tra trong localStorage để xác định trạng thái đăng nhập
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      // Đã đăng nhập, chuyển hướng đến dashboard
      this.router.navigate(['/dashboard']);
      return false; // Không cho phép truy cập vào trang hiện tại
    }

    return true; // Cho phép truy cập vào trang hiện tại
  }
}
