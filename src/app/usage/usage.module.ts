import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageAddComponent } from './add/add.component';
import { UsageListComponent } from './list/list.component';

@NgModule({
  declarations: [UsageAddComponent, UsageListComponent],
  imports: [
    CommonModule
  ]
})
export class UsageModule { }
