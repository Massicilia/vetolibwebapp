import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewClinicComponent} from './new-clinic.component';

const newclinicRoutes: Routes = [
  { path: 'clinic', component: NewClinicComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(newclinicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// @ts-ignore
export class NewClinicRoutingModule {}
