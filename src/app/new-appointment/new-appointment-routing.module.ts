import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewAppointmentComponent }    from './new-appointment.component';


const agendaRoutes: Routes = [
  { path: 'rendez-vous', component: NewAppointmentComponent }
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
