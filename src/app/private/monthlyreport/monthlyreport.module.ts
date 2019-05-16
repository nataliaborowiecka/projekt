import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyreportListComponent } from './list/monthlyreport-list.component';
import { MaterialModule } from 'src/app/material.module';
import {  RouterModule } from '@angular/router';
import { ReportComponent } from './reportlist/report.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MonthlyreportListComponent, ReportComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule, FormsModule
  ]
})
export class MonthlyreportModule { 

}
