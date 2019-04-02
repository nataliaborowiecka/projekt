import { DailyraportAddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { DailyraportListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DailyraportAddComponent, DailyraportListComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [],
  providers: []
})
export class DailyraportModule {}
