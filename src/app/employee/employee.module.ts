import { HttpClient } from '@angular/common/http';
import { EmployeeAddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  imports: [CommonModule, RouterModule,
    HttpClientModule,
    FormsModule,
 ],
  exports: [
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeeModule {}