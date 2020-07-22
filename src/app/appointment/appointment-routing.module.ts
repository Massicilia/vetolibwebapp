import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { ListAppointmentComponent }    from '../agenda/component';
import { NewAppointmentComponent }    from './new-appointment.component';
import { DetailsAppointmentComponent }    from './details-appointment.component';
import { ClientComponent }    from './client.component';
import { PetComponent }    from './pet.component';


const agendaRoutes: Routes = [
  //{ path: 'appointment', component: ListAppointmentComponent },
  { path: 'rendez-vous', component: NewAppointmentComponent },
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
