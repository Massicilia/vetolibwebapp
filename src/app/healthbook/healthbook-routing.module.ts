import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HealthbookComponent} from './healthbook.component';
import {HealthbookResolver} from './healthbook.resolver';

const healthbookRoutes: Routes = [
  { path: 'carnet/:idpet', component: HealthbookComponent, resolve: { pet: HealthbookResolver }}
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
