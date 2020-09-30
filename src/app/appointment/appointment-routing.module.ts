import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsAppointmentComponent }    from './details-appointment.component';
import { PetownerComponent }    from './petowner.component';
import { AppointmentDetailsResolver } from './appointment-details.resolver';
import {NewAppointmentComponent} from '../appointment-new/new-appointment.component';
import {AuthGuard} from '../auth-guard.service';

const agendaRoutes: Routes = [
  { path: 'rendez-vous/:id', component: DetailsAppointmentComponent, canActivate: [AuthGuard], resolve: { appointment: AppointmentDetailsResolver }, children: [
      { path: '', component: PetownerComponent}
  ]}
];
@NgModule({
  imports: [
    RouterModule.forChild(agendaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppointmentRoutingModule { }
