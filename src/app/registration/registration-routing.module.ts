import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegistrationComponent} from './registration.component';
import {RegistrationService} from './registration.service';
import {PetownerComponent} from '../appointment/petowner.component';
import {NewClinicComponent} from '../new-clinic/new-clinic.component';
import {ClinicSelectionComponent} from '../clinic-selection/clinic-selection.component';

const registrationRoutes: Routes = [
  { path: 'inscription', component: RegistrationComponent, children: [
      { path: 'clinic', component: NewClinicComponent},
      { path: 'selectionclinic', component: ClinicSelectionComponent},
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(registrationRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RegistrationService
  ]
})
export class RegistrationRoutingModule { }
