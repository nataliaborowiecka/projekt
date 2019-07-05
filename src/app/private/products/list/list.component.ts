import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'stock', 'action'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private productsService: ProductsService) {}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.productsService.getList().subscribe((products: any) => {
      this.dataSource.data = products;
    });
  }

  delete(element) {
    if (confirm('Czy napewno chcesz usunąć?')) {
      this.productsService.delete(element).subscribe(response => {
        this.dataSource.data = this.dataSource.data.filter(product => product.id !== element.id);
      });
    }
  }
}
