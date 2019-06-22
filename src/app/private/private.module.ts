import { UsageModule } from './usage/usage.module';
import { ProductsModule } from './products/products.module';
import { MonthlyreportModule } from './monthlyreport/monthly-report.module';
import { EmployeeModule } from './employee/employee.module';
import { DailyreportModule } from './dailyreport/daily-report.module';
import { EmployeesService } from './employee/employee.service';
import { PrivateRoutingModule } from './private-routing.module';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, MaterialModule, PrivateRoutingModule,
    HttpClientModule,
    DailyreportModule, EmployeeModule, MonthlyreportModule, ProductsModule,
     UsageModule, MatSidenavModule, MatToolbarModule],
  exports: [MatToolbarModule],
  providers: [EmployeesService],
})
export class PrivateModule { }
