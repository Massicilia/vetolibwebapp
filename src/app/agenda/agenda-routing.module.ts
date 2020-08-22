import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { AgendaResolver} from './agenda.resolver';


const agendaRoutes: Routes = [
  { path: 'agenda', component: AgendaComponent, resolve: { appointments: AgendaResolver } }
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
