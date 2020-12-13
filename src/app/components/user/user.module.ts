import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    UserRoutingModule,
    CoreModule
  ]
})
export class UserModule { }
