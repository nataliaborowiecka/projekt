import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeesService } from '../employee.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: '../add/employee-add.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  id = '';
  employee = {
    name: '',
    surname: ''
  };

  constructor(private acRouter: ActivatedRoute,
    private employeesService: EmployeesService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.id = this.acRouter.snapshot.params.id;
  }

  ngOnInit() {
    this.employeesService.getOneById(this.id)
      .subscribe(
        (response: any) => {
          this.employee = response;
        }
      );
  }

  save() {
    this.employeesService.update(this.employee, this.id)
      .subscribe(
        (response) => {
          this.snackBar.open('Poprawnie edytowano pracownika', 'Zamknij', {
            duration: 2000,
          });
          this.router.navigate(['/app/employee']);
        }
      )
  }
}
