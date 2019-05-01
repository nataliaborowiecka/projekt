import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    login: '',
    password: ''
  };
  error = false;
  constructor(private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void { }
  save() {
    if (this.user.login == 'admin' && this.user.password == 'admin') {
      console.log('zalogowano');
      this.router.navigate(['/app/employee']);
    } else {
      this.error = true;
      this.user = {
        login: '',
        password: ''
      };
      // this.snackBar.open('Poprawnie dodano pracownika', 'Zamknij', {
      //     duration: 2000}
      // ,}{
      console.log('login', this.user.login);
      console.log('password', this.user.password);
    }
  }
}
