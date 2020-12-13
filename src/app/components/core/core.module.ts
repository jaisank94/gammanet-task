import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ErrorComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
