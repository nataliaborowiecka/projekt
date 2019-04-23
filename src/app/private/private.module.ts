import { UsageModule } from './usage/usage.module';
import { ProductsModule } from './products/products.module';
import { MonthlyreportModule } from './monthlyreport/monthlyreport.module';
import { EmployeeModule } from './employee/employee.module';
import { DailyreportModule } from './dailyreport/dailyreport.module';
import { EmployeesService } from './employee/employee.service';
import { PrivateRoutingModule } from './private-routing.module';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, MaterialModule, PrivateRoutingModule,
    DailyreportModule, EmployeeModule, MonthlyreportModule, ProductsModule, UsageModule],
  exports: [],
  providers: [EmployeesService],
})
export class PrivateModule { }
