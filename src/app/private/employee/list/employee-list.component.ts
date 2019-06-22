import { FormControl } from '@angular/forms';
import { EmployeesService } from '../employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'action'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private employeesService: EmployeesService, private router: Router) {}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.employeesService.getList().subscribe((employees: any) => {
      this.dataSource.data = employees;
      console.log('dataSource', this.dataSource);
    });
  }
  delete(element) {
    if (confirm('Czy napewno chcesz usunąć?')) {
      this.employeesService.delete(element).subscribe(response => {
        this.dataSource.data = this.dataSource.data.filter(employee => employee.id !== element.id);
        this.router.navigate(['/app/employee']);
      });
    }
  }
}
