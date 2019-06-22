import { ProductsFormBuilder } from './add-products-form.builder';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../products';

@Component({
  selector: 'app-add',
  templateUrl: '../form/form.component.html',
  styleUrls: ['./add.component.scss']
})
export class ProductsAddComponent implements OnInit {
  product: FormGroup = ProductsFormBuilder.build()
  constructor(private productsService: ProductsService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  save() {
    this.productsService.add(this.product.value)
      .subscribe(
        (response) => {
          this.snackBar.open('Poprawnie dodano', 'Zamknij', {
            duration: 2000,
          });
          this.router.navigate(['/app/products']);
        }
      )
  }

}
