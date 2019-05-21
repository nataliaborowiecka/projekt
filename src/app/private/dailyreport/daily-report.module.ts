import { DailyreportAddServiceComponent } from './add/daily-report-add-service.component';
import { RouterModule } from '@angular/router';
import { DailyreportListComponent } from './list/daily-report-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { DailyreportAddExpensesComponent } from './add/daily-report-add-expenses.component';
import { DailyreportAddNotesComponent } from './add/daily-report-add-notes.component';
import { DailyreportEditComponent } from './edit/edit.component';





@NgModule({
  declarations: [DailyreportAddServiceComponent, DailyreportAddExpensesComponent, DailyreportAddNotesComponent,
    DailyreportListComponent, DailyreportEditComponent, ],
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  exports: [],
  providers: []
})
export class DailyreportModule { }
