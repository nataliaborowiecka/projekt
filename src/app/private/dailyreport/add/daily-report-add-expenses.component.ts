import { DailyReportService } from '../daily-report.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dailyreport-add-expenses',
  templateUrl: './daily-report-add-expenses.component.html'
})
export class DailyreportAddExpensesComponent implements OnInit {
  dailyreport = {
    expense: '',
    price: ''
  };
  constructor(private dailyreportService: DailyReportService,
    // private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void { }

  save() {
    const today = new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-');
    this.dailyreportService.getList()
      .subscribe(
        (list: any) => {
          console.log('Dostales liste', list);
          const dailyRaport = list.filter(obj => obj.date == today)[0];
          console.log('Twoj daily raport to', dailyRaport);
          if (dailyRaport.expenses) {
            dailyRaport.expenses.push(this.dailyreport);
          } else {
            dailyRaport.expenses = [];
            dailyRaport.expenses.push(this.dailyreport);
          }
          console.log('Aktualizacja obiektu');
          this.dailyreportService.update(dailyRaport)
            .subscribe(
              (response) => {
                console.log('Zaktualizowano')
                this.router.navigate(['/app//dailyreport/list']);
              })
        });

  }
}
