import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HelperService} from "../service/helper-service";
import {Router} from "@angular/router";
import {TokenService} from "../service/token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private tokenService: TokenService,
              private router: Router,
              private helperService: HelperService,) {
  }
  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logOut() {
    this.tokenService.logOut();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    })
  }
}
