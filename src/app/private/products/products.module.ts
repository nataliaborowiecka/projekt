import { MaterialModule } from './../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './list/list.component';
import { ProductsAddComponent } from './add/add.component';
import { ProductsService } from './products.service';
import { RouterModule } from '@angular/router';
import { ProductsEditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ProductsListComponent, ProductsAddComponent, ProductsEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
