import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent } from './scheduler.component';
import { AuthGuard } from '../auth-guard.service';
import { AgendaResolver } from '../agenda/agenda.resolver';


const schedulerRoutes: Routes = [
  { path: 'scheduler', component: SchedulerComponent, canActivate: [AuthGuard], resolve: { appointments: AgendaResolver } }
];


@NgModule({
  imports: [
    RouterModule.forChild(schedulerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// @ts-ignore
export class SchedulerRoutingModule {}
