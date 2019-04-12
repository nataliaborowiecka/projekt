import { Component, OnInit } from '@angular/core';
import { UsageService } from './../usage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-usage-add',
  templateUrl: '../form/form.component.html'
})
export class UsageAddComponent implements OnInit {
  usage = {
    date: '',
    employee: '',
    usage: ''
  };
  confirmed = false;

  constructor(
    private usageService: UsageService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): {};

  save() {
    this.usageService.add(this.usage).subscribe(response => {
      this.snackBar.open('Poprawnie dodano', 'Zamknij', {
        duration: 2000
      });
      this.router.navigate(['/usage']);
    });
  }
}
