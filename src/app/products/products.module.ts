import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './list/list.component';
import { ProductsAddComponent } from './add/add.component';
import { ProductsService } from './products.service';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ProductsEditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ProductsListComponent, ProductsAddComponent, ProductsEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
