import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginUsernameComponent } from './components/login-username/login-username.component';
import { LoginPasswordComponent } from './components/login-password/login-password.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FormGroupDirective } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    LoginUsernameComponent,
    LoginPasswordComponent,
    ButtonLoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [FormGroupDirective]
})
export class LoginModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas); // Adiciona todos os ícones sólidos
  }
 }
