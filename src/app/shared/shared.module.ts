import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

const module = [
  CommonModule,
  ReactiveFormsModule
]


@NgModule({
  declarations: [],
  imports: [...module],
  exports: [...module]
})
export class SharedModule { }
