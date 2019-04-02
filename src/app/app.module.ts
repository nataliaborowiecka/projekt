import { MaterialModule } from './material.module';
import { EmployeeModule } from './employee/employee.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyraportModule } from './dailyraport/dailyraport.module';

@NgModule({
  declarations: [AppComponent],
  imports: [EmployeeModule, BrowserModule, AppRoutingModule, DailyraportModule,
    MaterialModule,
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
