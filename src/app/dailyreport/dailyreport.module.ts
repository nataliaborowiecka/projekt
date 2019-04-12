import { DailyreportAddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { DailyreportListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';



@NgModule({
  declarations: [DailyreportAddComponent, DailyreportListComponent],
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  exports: [],
  providers: []
})
export class DailyreportModule {}
