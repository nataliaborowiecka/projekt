import { EmployeesService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['app-employee-list.css'],

})
export class EmployeeListComponent implements OnInit {

  employeesList = [];

  constructor(private employeesService: EmployeesService) {
    this.employeesService.getList().subscribe(
      (employees: any) => {
        this.employeesList = employees;
      }
    )
  }

  ngOnInit(): void { }


}
