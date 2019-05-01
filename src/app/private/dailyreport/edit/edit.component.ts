import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { DailyReportService } from '../dailyreport.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class DailyreportEditComponent implements OnInit {
  id = '';
  dailyreport = {};
  constructor(private DailyreportService: DailyReportService,
    private AcRouter: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.AcRouter.snapshot.params.id;
    this.DailyreportService.getOneById(this.id).subscribe(dailyreport => {
      this.dailyreport = dailyreport;
      console.log('dailyreport', dailyreport)
    })
  }

}
