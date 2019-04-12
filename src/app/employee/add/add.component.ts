import { EmployeesService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
  employee = {
    name: '',
    surname: ''
  };
  confirmed = false;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {}

  save() {
    this.employeesService.add(this.employee).subscribe(response => {
      console.log('ODostalem odpowiedz', response);
      this.confirmed = true;
    });
  }
}
