import { DailyReportService } from '../dailyreport.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dailyreport-add-expenses',
  templateUrl: './add-expenses.component.html'
})
export class DailyreportAddExpensesComponent implements OnInit {
dailyreportexpense = {
  id: "",
  expense: "",
  price: ""
};
  constructor(private dailyreportService: DailyReportService,
    // private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {}
  save() {
    const today = new Date().toISOString().replace(/T.*/, '').split('-').reverse().join('-');
    this.dailyreportService.getList()
    .subscribe(
      (list: any) => {
        console.log('Dostales liste', list);
        const dailyRaport = list.filter(obj => obj.date == today)[0];
        console.log('Twoj daily raport to', dailyRaport);
        if (dailyRaport.expenses) {
          dailyRaport.expenses.push({
            expenses: this.dailyreportexpense.expense
          });
        } else {
          dailyRaport.expenses = [];
          dailyRaport.expenses.push({
            expenses: this.dailyreportexpense.expense
          });
        }
        console.log('Aktualizacja obiektu');
        this.dailyreportService.update(dailyRaport)
          .subscribe(
            (response) => {
              console.log('Zaktualizowano')
            })});
            this.router.navigate(['/dailyreport/list']);



    }}
