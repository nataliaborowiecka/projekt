import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'stock', 'action'];
  dataSource = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getList().subscribe(
      (products: any) => {
        this.dataSource = products;
      }
    );
  }

  delete(element) {
    if (confirm('Czy napewno chcesz usunąć?')) {
      this.productsService.delete(element)
      .subscribe(
        (response) => {
          this.dataSource = this.dataSource.filter(product => product.id !== element.id);
        }
      );
    }
  }

}
