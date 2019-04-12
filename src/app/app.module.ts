import { MaterialModule } from './material.module';
import { EmployeeModule } from './employee/employee.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyreportModule } from './dailyreport/dailyreport.module';
import { ProductsModule } from './products/products.module';
import { UsageModule } from './usage/usage.module';
import {EmployeesService} from "./employee/employee.service";

@NgModule({
  declarations: [AppComponent, ],
  imports: [EmployeeModule, BrowserModule, AppRoutingModule, DailyreportModule,
    MaterialModule,
    ProductsModule,
    BrowserAnimationsModule, UsageModule],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
