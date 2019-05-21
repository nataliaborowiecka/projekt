import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyreportListComponent } from './list/monthly-report-list.component';
import { MaterialModule } from 'src/app/material.module';
import {  RouterModule } from '@angular/router';
import { ReportComponent } from './report-list/report-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MonthlyreportListComponent, ReportComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule, FormsModule
  ]
})
export class MonthlyreportModule { 

}
