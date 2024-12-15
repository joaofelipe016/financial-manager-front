import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class LoginComponent {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      scUsuario: ['', [Validators.required]],
      scSenha: ['', [Validators.required]]
    });
    console.log('Form', this.formGroup.value)
  }
}
