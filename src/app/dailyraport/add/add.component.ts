import { DailyRaportService } from './../dailyreport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dailyraport-add',
  templateUrl: './dailyraport-add.component.html'
})
export class DailyraportAddComponent implements OnInit {
dailyraport = {
  name: '',
  date: ''
};
confirmed = false;
  constructor(private dailyraportService: DailyRaportService) {}

  ngOnInit(): void {}
  save() {
    // this.dailyraportService.add(this.dailyraport).subscribe(
    //   (reponse) => {
    //     console.log('Dostałem odpowiedz', response);
    //     this.confirmed = true;
    //   }
    // )
  }
}
