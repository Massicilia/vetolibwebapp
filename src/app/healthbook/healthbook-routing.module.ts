import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HealthbookComponent} from './healthbook.component';
import {HealthbookResolver} from './healthbook.resolver';
import {AuthGuard} from '../auth-guard.service';

const healthbookRoutes: Routes = [
  { path: ':idappointment/:idpetowner/carnet', component: HealthbookComponent, canActivate: [AuthGuard], resolve: { pet: HealthbookResolver }}
];

@NgModule({
  imports: [
    RouterModule.forChild(healthbookRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HealthbookRoutingModule { }
