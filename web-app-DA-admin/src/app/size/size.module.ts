import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeCreateUpdateComponent } from './size-create-update/size-create-update.component';
import {RouterModule, Routes} from "@angular/router";
import {SizeComponent} from "./size.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatTreeModule} from "@angular/material/tree";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
const routes: Routes = [
  {
    path : '',
    pathMatch: 'full',
    component: SizeComponent
  }
];

@NgModule({
  declarations: [
    DialogConfirmComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    MatTreeModule,
    MatIconModule
  ]
})
export class SizeModule { }
