import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsAppointmentComponent }    from './details-appointment.component';
import { ClientComponent }    from './client.component';
import { PetComponent }    from './pet.component';


const agendaRoutes: Routes = [
  { path: 'appointment/:id', component: DetailsAppointmentComponent },
  { path: 'appointment/:id/client', component: ClientComponent },
  { path: 'appointment/:id/animal', component: PetComponent }
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
