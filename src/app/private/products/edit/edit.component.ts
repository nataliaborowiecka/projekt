import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { ProductsFormBuilder } from '../add/add-products-form.builder';

@Component({
  selector: 'app-edit',
  templateUrl: '../form/form.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  id = '';
  product: FormGroup = ProductsFormBuilder.build();
  constructor(
    private acRouter: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit() {
    this.productsService.getOneById(this.id).subscribe((response: any) => {
      this.product.patchValue(response);
    });
  }

  save() {
    this.productsService.update(this.product.value, this.id).subscribe(response => {
      this.snackBar.open('Poprawnie edytowano', 'Zamknij', {
        duration: 2000
      });
      this.router.navigate(['/app/products']);
    });
  }
}
