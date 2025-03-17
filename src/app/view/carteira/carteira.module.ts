import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarteiraComponent } from './carteira.component';
import { CarteiraRoutingModule } from './carteira-routing.module';

@NgModule({
  declarations: [
    CarteiraComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CarteiraRoutingModule
  ]
})
export class CarteiraModule { }