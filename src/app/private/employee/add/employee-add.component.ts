import { EmployeesService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import {Employee} from '../employee';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.employee.scss']
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee = {
    name: '',
    surname: '',
    id: null
  };
  confirmed = false;

  constructor(private employeesService: EmployeesService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.employeesService.add(this.employee).subscribe(response => {
      this.snackBar.open('Poprawnie dodano pracownika', 'Zamknij', {
        duration: 2000,
      });
      this.router.navigate(['/app/employee']);
      
    });
  }
}
