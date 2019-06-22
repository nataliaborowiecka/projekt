import { ExpensesFormBuilder } from './daily-report-add-form.builder';
import { FormGroup } from '@angular/forms';
import { DailyReportService } from '../daily-report.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { DailyReportExpenses } from '../daily-report';


@Component({
  selector: 'app-dailyreport-add-expenses',
  templateUrl: './daily-report-add-expenses.component.html'
})
export class DailyreportAddExpensesComponent implements OnInit {
  dailyreport: FormGroup = ExpensesFormBuilder.build()
  constructor(private dailyreportService: DailyReportService,
    private router: Router) { }

  ngOnInit(): void { }

  save() {
    const today = new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-');
    this.dailyreportService.getList()
      .subscribe(
        (list: any) => {
          const dailyRaport = list.filter(obj => obj.date == today)[0];
          if (dailyRaport) {
            dailyRaport.push(this.dailyreport.value);
          } else {
            dailyRaport.expense = [];
            dailyRaport.push(this.dailyreport.value);
          }
          this.dailyreportService.update({ obj: dailyRaport })
            .subscribe(
              (response) => {
                this.router.navigate(['/app//dailyreport/list']);
              })
        });

  }
}
