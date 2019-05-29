import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonthlyReportService } from '../monthly-report.service';
import { MonthlyReport } from '../monthly-report';

export interface month {
  value: string;
  viewValue: string;
}
export interface year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './monthly-report-list.component.html',
  styleUrls: ['./monthly-report-list.component.scss']
})
export class MonthlyreportListComponent{
   // KROK 1
   // Tutaj powstala zmienna reports / aby potem mozna bylo jej uzywac w pliku html
   reports = [];
  monthlyreport: MonthlyReport = {
    month: 0,
    year: 2019
  };
   months: month[] = [
     {value: '0', viewValue: 'Styczeń'},
     {value: '1', viewValue: 'Luty'},
     {value: '2', viewValue: 'Marzec'},
     {value: '3', viewValue: 'Kwiecień'},
     {value: '4', viewValue: 'Maj'},
     {value: '5', viewValue: 'Czerwiec'},
     {value: '6', viewValue: 'Lipiec'},
     {value: '7', viewValue: 'Sierpień'},
     {value: '8', viewValue: 'Wrzesień'},
     {value: '9', viewValue: 'Październik'},
     {value: '10', viewValue: 'Listopad'},
     {value: '11', viewValue: 'Grudzień'},
   ];
   years: year[] = [
     {value: '2019', viewValue: '2019'},
     {value: '2020', viewValue: '2020'}
   ];
  constructor (private router:Router,
    private monthlyreportservice: MonthlyReportService) {}

  search() {
    console.log(this.monthlyreport,)
    this.monthlyreportservice.get(this.monthlyreport.month, this.monthlyreport.year).
    subscribe((downloadedReports: any) => {
      // KROK 2
      // Tutaj do naszej zmiennej z kroku 1 przypisujemy to co sobie pobieramy ;-) 
      this.reports = downloadedReports;
    });

  }
}
