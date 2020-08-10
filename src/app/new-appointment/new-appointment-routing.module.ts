import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAppointmentComponent }    from './new-appointment.component';
import { AuthGuard } from '../auth-guard.service';

const agendaRoutes: Routes = [
  { path: 'rendez-vous', component: NewAppointmentComponent, canActivate: [AuthGuard] }
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
