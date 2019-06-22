import { MaterialModule } from './../../material.module';
import { EmployeeAddComponent } from './add/employee-add.component';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './list/employee-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeEditComponent } from './edit/edit.component';
import { MatSortModule } from '@angular/material';


@NgModule({
  declarations: [
    EmployeeAddComponent,
    EmployeeListComponent,

    EmployeeEditComponent
  ],
  imports: [CommonModule, RouterModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSortModule

  ],
  exports: [
  ],
  providers: [
  ]
})
export class EmployeeModule { }
