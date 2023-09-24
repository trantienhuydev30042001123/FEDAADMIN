import {Component, OnInit} from '@angular/core';
import {AuthGuard} from "./service/auth.guard";
import { Router, Event, NavigationEnd, RouterEvent } from '@angular/router';
import {BehaviorSubject, filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'web-app-DA-admin';
  // sideBarOpen = true;
  // showNavAndHeader: boolean;
  //
  // sideBarToggler() {
  //   this.sideBarOpen = !this.sideBarOpen;
  // }
  // constructor(private router: Router, private authGuard: AuthGuard) {
  //   this.showNavAndHeader = true;
  //
  //   this.router.events
  //     .pipe(filter((event: Event): event is RouterEvent => event instanceof NavigationEnd))
  //     .subscribe((event: RouterEvent) => {
  //       this.showNavAndHeader = event.url !== '/login';
  //     });
  // }
  // ngOnInit() {
  // }
  title = 'web-app-DA-admin';
  sideBarOpen = true;
  showNavAndHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private router: Router, private authGuard: AuthGuard) {
    this.router.events
      .pipe(filter((event: Event): event is RouterEvent => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        this.showNavAndHeader.next(event.url !== '/login');
      });
  }

  ngOnInit() {
  }
}
