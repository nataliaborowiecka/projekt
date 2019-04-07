import { DailyreportAddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { DailyreportListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DailyreportAddComponent, DailyreportListComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [],
  providers: []
})
export class DailyreportModule {}
