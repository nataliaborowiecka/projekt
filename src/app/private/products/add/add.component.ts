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
  product: Product= {
    id: undefined,
    name: '',
    stock: 0
  };

  constructor(private productsService: ProductsService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  save() {
    this.productsService.add(this.product)
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
