import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-login-username',
  templateUrl: './login-username.component.html',
  styleUrls: ['./login-username.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class LoginUsernameComponent implements OnInit{
  
  formGroup: FormGroup | undefined;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.formGroup = this.controlContainer.control as FormGroup;
    this.formGroup.get('scUsuario')?.valueChanges.subscribe(console.log)
  }
}
