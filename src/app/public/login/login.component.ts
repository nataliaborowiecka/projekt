import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}

  ngOnInit(): void {}
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
      console.log('zly login i haslo');
    }
    console.log('login', this.user.login);
    console.log('password', this.user.password);
  }
}
