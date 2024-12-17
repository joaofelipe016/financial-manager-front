import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-login-password',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class LoginPasswordComponent implements OnInit {
  formGroup: FormGroup | undefined;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
  }
}
