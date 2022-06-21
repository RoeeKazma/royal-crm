import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = {
    email: '',
    password: '',
  };

  error = '';

  onSubmit(form: NgForm) {
    console.log(this.form);
  }

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
