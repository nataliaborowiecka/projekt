import { DailyreportAddServiceComponent } from './add/add-service.component';
import { RouterModule } from '@angular/router';
import { DailyreportListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { DailyreportAddExpensesComponent } from './add/add-expenses.component';
import { DailyreportAddNotesComponent } from './add/add-notes.component';
import { DailyreportEditComponent } from './edit/edit.component';



@NgModule({
  declarations: [DailyreportAddServiceComponent, DailyreportAddExpensesComponent, DailyreportAddNotesComponent,
    DailyreportListComponent, DailyreportEditComponent],
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  exports: [],
  providers: []
})
export class DailyreportModule { }
