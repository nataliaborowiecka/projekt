import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageAddComponent } from './add/add.component';
import { UsageListComponent } from './list/list.component';
import { MaterialModule } from './../../material.module';
import { ProductsService } from '../products/products.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsageEditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UsageAddComponent, UsageListComponent, UsageEditComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, MatSortModule],
  providers: [ProductsService]
})
export class UsageModule { }
