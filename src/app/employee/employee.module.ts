import { EmployeeAddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EmployeeAddComponent,
    EmployeeListComponent,

  ],
  imports: [CommonModule, RouterModule],
  exports: [],
  providers: []
})
export class EmployeeModule {}
