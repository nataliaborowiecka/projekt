import { DailyReportService } from './../dailyreport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailyreport-add',
  templateUrl: './dailyreport-add.component.html'
})
export class DailyreportAddComponent implements OnInit {
dailyreport = {
  name: '',
  date: ''
};
confirmed = false;
  constructor(private dailyreportService: DailyReportService) {}

  ngOnInit(): void {}
  save() {
    // this.dailyreportService.add(this.dailyreport).subscribe(
    //   (reponse) => {
    //     console.log('Dostałem odpowiedz', response);
    //     this.confirmed = true;
    //   }
    // )
  }
}
