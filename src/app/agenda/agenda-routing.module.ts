import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { AgendaResolver} from './agenda.resolver';
import {NewAppointmentComponent} from '../new-appointment/new-appointment.component';
import {AuthGuard} from '../auth-guard.service';


const agendaRoutes: Routes = [
  { path: 'agenda', component: AgendaComponent, canActivate: [AuthGuard], resolve: { appointments: AgendaResolver } }
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
export class AgendaRoutingModule {}
