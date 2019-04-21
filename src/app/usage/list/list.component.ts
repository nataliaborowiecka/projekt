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
  delete(element) {
    if (confirm('Czy napewno chcesz usunąć?')) {
      this.usageService.delete(element)
      .subscribe(
        (response) => {
          this.dataSource = this.dataSource.filter(usage => usage.id !== element.id);
}
      )}}}
