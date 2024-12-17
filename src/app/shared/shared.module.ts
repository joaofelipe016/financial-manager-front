import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FieldTextComponent } from '../components/field-text/field-text.component';
import { ReactiveFormsModule } from '@angular/forms';

const module = [CommonModule, ReactiveFormsModule];

const components = [FieldTextComponent];

@NgModule({
  declarations: [...components],
  imports: [...module],
  exports: [...module, ...components],
})
export class SharedModule {}
