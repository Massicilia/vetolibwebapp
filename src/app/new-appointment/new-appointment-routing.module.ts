import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAppointmentComponent }    from './new-appointment.component';
import { AuthGuard } from '../auth-guard.service';
import { SchedulerComponent } from '../scheduler/scheduler.component';
import { AgendaResolver } from '../agenda/agenda.resolver';

const agendaRoutes: Routes = [
  { path: 'rendez-vous', component: NewAppointmentComponent, canActivate: [AuthGuard], children: [
      { path: 'scheduler', component: SchedulerComponent, resolve: { appointments: AgendaResolver }},
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
