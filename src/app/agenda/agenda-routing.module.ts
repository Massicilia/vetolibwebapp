import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAppointmentComponent }    from './agenda.component';
import { AppointmentComponent }    from './appointment.component';
import { DetailsAppointmentComponent }    from './details-appointment.component';
import { ClientComponent }    from './client.component';
import { PetComponent }    from './pet.component';


const agendaRoutes: Routes = [
  { path: 'agenda', component: ListAppointmentComponent },
  { path: 'rendez-vous', component: AppointmentComponent },
  { path: 'agenda/:id', component: DetailsAppointmentComponent },
  { path: 'agenda/:id/:idclient', component: ClientComponent },
  { path: 'agenda/:id/animal/:idanimal', component: PetComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(agendaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AgendaRoutingModule { }
