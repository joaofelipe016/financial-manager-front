import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/entity/login-request';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class ButtonLoginComponent implements OnInit {
  formGroup: FormGroup | undefined;

  constructor(
    private authService: AuthService,
    private controlContainer: ControlContainer,
    private router: Router
  ) {}

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  login() {
    let loginRequest: LoginRequest = this.formGroup?.getRawValue();
    this.authService
      .login(loginRequest)
      .then((data) => {
        if (data != null) {
          this.router.navigate(['/home']);
        }
      })
      .catch((error) => console.error('Error', error));
  }
}
