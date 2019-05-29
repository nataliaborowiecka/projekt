import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../products';

@Component({
  selector: 'app-edit',
  templateUrl: '../form/form.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  product: Product = {
    id: '',
    name: '',
    stock: 0
  };
  constructor(private acRouter: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.product.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit() {
    this.productsService.getOneById(this.product.id)
      .subscribe(
        (response: any) => {
          this.product = response;
        }
      );
  }

  save() {
    this.productsService.update(this.product, this.product.id)
      .subscribe(
        (response) => {
          this.snackBar.open('Poprawnie edytowano', 'Zamknij', {
            duration: 2000,
          });
          this.router.navigate(['/app/products']);
        }
      )
  }

}
