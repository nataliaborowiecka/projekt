import { Component, OnInit } from '@angular/core';
import { UsageService } from 'src/app/usage/usage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsageListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'employee', 'usage', 'action'];
  dataSource = [];

  constructor(private usageService: UsageService) {}

  ngOnInit() {
    this.usageService.getList().subscribe((usage: any) => {
      this.dataSource = usage;
    });
  }
}
