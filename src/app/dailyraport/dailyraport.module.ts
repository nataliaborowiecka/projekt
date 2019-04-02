import { DailyraportAddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { DailyraportListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DailyraportAddComponent, DailyraportListComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
  providers: []
})
export class DailyraportModule {}
