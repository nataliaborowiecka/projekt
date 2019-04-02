import { EmployeeModule } from './employee/employee.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyraportModule } from './dailyraport/dailyraport.module';

@NgModule({
  declarations: [AppComponent],
  imports: [EmployeeModule, BrowserModule, AppRoutingModule, DailyraportModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
