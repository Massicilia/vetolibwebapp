import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { NewClinicModule } from '../new-clinic/new-clinic.module';
import { ClinicSelectionModule } from '../clinic-selection/clinic-selection.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegistrationRoutingModule,
    NewClinicModule,
    ClinicSelectionModule
  ],
  declarations: [
    RegistrationComponent
  ],
  providers: []
})
export class RegistrationModule { }
