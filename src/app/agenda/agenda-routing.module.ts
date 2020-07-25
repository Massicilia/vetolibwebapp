import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';


const agendaRoutes: Routes = [
  { path: 'agenda', component: AgendaComponent }
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
export class AgendaRoutingModule {

}
