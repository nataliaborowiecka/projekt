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
confirmed = false;
  constructor(private dailyreportService: DailyReportService,
    private snackBar: MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {}
  save() {
    this.dailyreportService.add(this.dailyreportexpense).subscribe(response => {
      this.snackBar.open('Poprawnie dodano wydatek', 'Zamknij', {
        duration: 2000,
      });
      this.router.navigate(['/dailyreport']);
    })}}
