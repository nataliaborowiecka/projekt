import { EmployeesService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./app-employee-list.css'],

})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname',];
  dataSource = [];

  

  constructor(private employeesService: EmployeesService) { }
   
  ngOnInit() {
    this.employeesService.getList().subscribe(
      (employees: any) => {
        this.dataSource = employees;
      }
    )
    }
}