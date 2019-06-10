import { FormGroup } from '@angular/forms';
import { EmployeesService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import {Employee} from '../employee';
import { EmployeeFormBuilder } from './employee-add-form.builder';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.employee.scss']
})
export class EmployeeAddComponent {
  employee: FormGroup = EmployeeFormBuilder.build()
  confirmed = false;

  constructor(private employeesService: EmployeesService,
    private snackBar: MatSnackBar,
    private router: Router) {}


  save() {
    console.log('dodano',)
    this.employeesService.add(this.employee.value).subscribe(response => {
      this.snackBar.open('Poprawnie dodano pracownika', 'Zamknij', {
        duration: 2000,
      });
      this.router.navigate(['/app/employee']);
      
    });
  }
}
