import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  modelLogin = {};
  fieldsLogin: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Contraseña',
        type: 'password',
        required: true,
      },
    },
  ];
  registerForm = new FormGroup({});
  modelRegister = {};
  fieldsRegister: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Contraseña',
        type: 'password',
        required: true,
      },
    },
  ];
  ingreso = false;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.ingreso = true;
    } else {
      this.ingreso = false;
    }
  }

  async onSubmitLogin() {
    await this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    if (this.authService.isLoggedIn) {
      this.ingreso = true;
      this.router.navigate(['carrito']);
    }
  }

  async onSubmitRegister() {
    await this.authService.register(
      this.registerForm.value.email,
      this.registerForm.value.password
    );
    if (this.authService.isLoggedIn) {
      this.ingreso = true;
    }
  }

  logout() {
    this.ingreso = false;
  }
}
