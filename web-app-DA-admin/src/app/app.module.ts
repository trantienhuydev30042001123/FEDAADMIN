import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import { SidenavComponent } from './sidena/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import { UserComponent } from './user/user.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {LoginComponent} from "./login/login.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import { RoleComponent } from './role/role.component';
import { SizeComponent } from './size/size.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import {SizeCreateUpdateComponent} from "./size/size-create-update/size-create-update.component";
import { CategoryCreateUpdateComponent } from './category/category-create-update/category-create-update.component';
import { RoleCreateUpdateComponent } from './role/role-create-update/role-create-update.component';
import {UserCreateUpdateComponent} from "./user/user-create-update/user-create-update.component";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {AuthGuard} from "./service/auth.guard";
import {HomeComponent} from "./home/home.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { ProductCreateUpdateComponent } from './product/product-create-update/product-create-update.component';
import {LoginFailComponent} from "./login/login-fail/login-fail.component";
import { OrderComponent } from './order/order.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UserComponent },
      { path: 'product', component: ProductComponent },
      { path: 'role', component: RoleComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'size', component: SizeComponent },
      { path: 'order', component: OrderComponent}
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardComponent,
    UserComponent,
    RoleComponent,
    SizeComponent,
    CategoryComponent,
    ProductComponent,
    DialogConfirmComponent,
    SizeCreateUpdateComponent,
    CategoryCreateUpdateComponent,
    RoleCreateUpdateComponent,
    UserCreateUpdateComponent,
    HomeComponent,
    ProductCreateUpdateComponent,
    LoginFailComponent,
    OrderComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    NgxChartsModule,
    FontAwesomeModule,
    ChartModule

  ],
  providers: [],
  exports: [
    SidenavComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
