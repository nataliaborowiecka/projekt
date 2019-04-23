import { MaterialModule } from './../../material.module';
import { EmployeeAddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EmployeeEditComponent } from './edit/edit.component';


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

  ],
  exports: [
  ],
  providers: [
  ]
})
export class EmployeeModule { }
