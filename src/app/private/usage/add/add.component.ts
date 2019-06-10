import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsageService } from './../usage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeesService } from "../../employee/employee.service";
import { UsageTmp, Usage } from '../usage';
import { UsageFormBuilder } from './add-form.builder';
// import { Usage } from '../usage';
@Component({
  selector: 'app-usage-add',
  templateUrl: '../form/form.component.html'
})
export class UsageAddComponent {
  usage: FormGroup = UsageFormBuilder.build();
  usageTmp: FormGroup = UsageFormBuilder.usageTmpBuild();
  confirmed = false;
  employees = [];
  addNewLine = false;
  constructor(
    private usageService: UsageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private employeeService: EmployeesService
  ) {
    this.employeeService.getList()
      .subscribe(
        (employeesFromBackend: any) => {
          this.employees = employeesFromBackend;
        }
      );
  }

  add() {
    this.addNewLine = true;
  }

  saveLine() {
    this.usage.value.usages.push(this.usageTmp.value);
    this.usageTmp.reset();
  }

  sum(param: string) {
    let sum = 0;
    for (let i = 0; i < this.usage.value.usages.length; i++) {
      sum += +this.usage.value.usages[i][param];
    }
    return sum;
  }

  deleteU(index) {
    this.usage.value.usages.splice(index, 1);
  }

  save() {

    this.usage.value.bleachSum = this.sum('bleach');
    this.usage.value.dyeSum = this.sum('dye');
    this.usage.value.waterSum = this.sum('water');
    this.usage.value.olaplexSum = this.sum('olaplex');
    this.usageService.add(this.usage.value).subscribe(response => {
      this.snackBar.open('Poprawnie dodano', 'Zamknij', {
        duration: 2000
      });
      this.router.navigate(['/app/usage']);
    });
  }
}
