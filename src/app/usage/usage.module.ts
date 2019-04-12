import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageAddComponent } from './add/add.component';
import { UsageListComponent } from './list/list.component';
import { MaterialModule } from '../material.module';
import { ProductsService } from '../products/products.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [UsageAddComponent, UsageListComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule],
  providers: [ProductsService]
})
export class UsageModule {}
