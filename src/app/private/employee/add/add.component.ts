import { EmployeesService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./add.employee.scss']
})
export class EmployeeAddComponent implements OnInit {
  employee = {
    name: '',
    surname: ''
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
