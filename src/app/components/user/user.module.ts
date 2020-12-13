import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../core/material.module';

import { UserComponent } from './user.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';


@NgModule({
  declarations: [
    UserComponent,
    AddExperienceComponent
  ],
  imports: [
    UserRoutingModule,
    CoreModule,
    MaterialModule
  ]
})
export class UserModule { }
