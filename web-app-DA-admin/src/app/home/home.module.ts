import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {UserComponent} from "../user/user.component";
import {ProductComponent} from "../product/product.component";
import {RoleComponent} from "../role/role.component";
import {CategoryComponent} from "../category/category.component";
import {SizeComponent} from "../size/size.component";
import {AppComponent} from "../app.component";
import {SidenavComponent} from "../sidena/sidenav.component";
import {HeaderComponent} from "../header/header.component";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {SizeCreateUpdateComponent} from "../size/size-create-update/size-create-update.component";
import {CategoryCreateUpdateComponent} from "../category/category-create-update/category-create-update.component";
import {RoleCreateUpdateComponent} from "../role/role-create-update/role-create-update.component";
import {UserCreateUpdateComponent} from "../user/user-create-update/user-create-update.component";
import {HomeComponent} from "./home.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {AppModule} from "../app.module";



const appRoutes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' }, // Chuyển hướng về trang login mặc định
//   { path: 'login', component: LoginComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'user', component: UserComponent },
//   { path: 'product', component: ProductComponent },
//   { path: 'role', component: RoleComponent },
//   { path: 'category', component: CategoryComponent },
//   { path: 'size', component: SizeComponent },
];
@NgModule({
  declarations: [
    // DashboardComponent,
    // UserComponent,
    // RoleComponent,
    // SizeComponent,
    // CategoryComponent,
    // ProductComponent,
    // DialogConfirmComponent,
    // SizeCreateUpdateComponent,
    // CategoryCreateUpdateComponent,
    // RoleCreateUpdateComponent,
    // UserCreateUpdateComponent,
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
    AppModule,

  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
