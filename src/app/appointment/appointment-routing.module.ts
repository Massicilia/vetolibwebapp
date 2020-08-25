import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsAppointmentComponent }    from './details-appointment.component';
import { PetownerComponent }    from './petowner.component';
import { AppointmentDetailsResolver } from './appointment-details.resolver';

const agendaRoutes: Routes = [
  { path: 'rendez-vous/:id', component: DetailsAppointmentComponent, resolve: { appointment: AppointmentDetailsResolver }, children: [
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
