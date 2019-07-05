import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsageService } from 'src/app/private/usage/usage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsageListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'employee', 'usage', 'action'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private usageService: UsageService) {}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.usageService.getList().subscribe((usage: any) => {
      this.dataSource = usage;
    });
  }
  delete(element) {
    if (confirm('Czy napewno chcesz usunąć?')) {
      this.usageService.delete(element).subscribe(response => {
        this.dataSource.data = this.dataSource.data.filter(usage => usage.id !== element.id);
      });
    }
  }
}
