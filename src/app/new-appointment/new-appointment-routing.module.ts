import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAppointmentComponent }    from './new-appointment.component';
import { AuthGuard } from '../auth-guard.service';
import {RegistrationComponent} from '../registration/registration.component';
import {NewClinicComponent} from '../clinic-new/new-clinic.component';
import {SchedulerComponent} from '../scheduler/scheduler.component';

const agendaRoutes: Routes = [
  { path: 'rendez-vous', component: NewAppointmentComponent, canActivate: [AuthGuard], children: [
      { path: 'scheduler', component: SchedulerComponent},
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
// @ts-ignore
export class NewAppointmentRoutingModule { }
