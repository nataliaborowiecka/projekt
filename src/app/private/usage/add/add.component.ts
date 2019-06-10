import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsageService } from './../usage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {EmployeesService} from "../../employee/employee.service";
import { UsageTmp, Usage } from '../usage';
import { UsageFormBuilder } from './add-form.builder';
// import { Usage } from '../usage';
@Component({
  selector: 'app-usage-add',
  templateUrl: '../form/form.component.html'
})
export class UsageAddComponent implements OnInit {
  usage: FormGroup = UsageFormBuilder.build();
  usageTmp: UsageTmp;
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

  ngOnInit() { }

  add() {
    this.addNewLine = true;
  }

  saveLine() {
    // this.usage.usages.push(this.usageTmp);
    // this.usageTmp = {
    //   bleach: 0,
    //   dye: 0,
    //   water: 0,
    //   olaplex: 0
    // };
  }

  sumBleach() {
    // let sum = 0;
    // for (let i = 0; i < this.usage.usages.length; i++) {
    //   sum += +this.usage.usages[i].bleach;
    // }
    // return sum;
  }

  sumDye() {
    // let sum = 0;
    // for (let i = 0; i < this.usage.usages.length; i++) {
    //   sum += +this.usage.usages[i].dye;
    // }

    // return sum;
  }
  sumWater() {
    // let sum = 0;
    // for (let i = 0; i < this.usage.usages.length; i++) {
    //   sum += +this.usage.usages[i].water;
    // }
    // return sum;
  }

  sumOlaplex() {
    // let sum = 0;
    // for (let i = 0; i < this.usage.usages.length; i++) {
    //   sum += +this.usage.usages[i].olaplex;
    // }
    // return sum;
  }
  deleteU(index) {
    // this.usage.usages.splice(index, 1);
  }

  save() {
    // if (this.usage.employee.name.length > 0) {
    //   this.usage.bleachSum = this.sumBleach();
    //   this.usage.dyeSum = this.sumDye();
    //   this.usage.waterSum = this.sumWater();
    //   this.usage.olaplexSum = this.sumOlaplex();
    //   this.usageService.add(this.usage).subscribe(response => {
    //     this.snackBar.open('Poprawnie dodano', 'Zamknij', {
    //      duration: 2000
    //     });
    //      this.router.navigate(['/app/usage']);
    //   });
    // } else {
    //   alert('Dodaj pracownika');
    // }
  }
}
