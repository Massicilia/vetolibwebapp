import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsAppointmentComponent }    from './details-appointment.component';
import { ClientComponent }    from './client.component';
import { PetComponent }    from './pet.component';
import {AppointmentService} from './appointment.service';


const agendaRoutes: Routes = [
  { path: 'rendez-vous/:id', component: DetailsAppointmentComponent, resolve: {data: AppointmentService}},
  { path: 'rendez-vous/:id/client', component: ClientComponent },
  { path: 'rendez-vous/:id/animal', component: PetComponent }
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
