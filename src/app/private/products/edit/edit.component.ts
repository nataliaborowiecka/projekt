import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../form/form.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  id = '';
  product = {
    name: '',
    stock: 0
  };
  constructor(private acRouter: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router) {
    this.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit() {
    this.productsService.getOneById(this.id)
      .subscribe(
        (response: any) => {
          this.product = response;
        }
      );
  }

  save() {
    this.productsService.update(this.product, this.id)
      .subscribe(
        (response: any) => {
          this.product = response;
          this.router.navigate['/app/products']
        }
      )
  }

}
