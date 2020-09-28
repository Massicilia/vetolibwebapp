import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda.component';
import { AgendaResolver} from './agenda.resolver';
import { AuthGuard } from '../auth-guard.service';

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

export class AgendaRoutingModule {}
