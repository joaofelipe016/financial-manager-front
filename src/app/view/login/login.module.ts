import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginUsernameComponent } from './components/login-username/login-username.component';
import { LoginPasswordComponent } from './components/login-password/login-password.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginUsernameComponent,
    LoginPasswordComponent,
    ButtonLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
