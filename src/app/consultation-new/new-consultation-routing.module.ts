import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewConsultationComponent} from './new-consultation.component';

const newclinicRoutes: Routes = [
  { path: 'consultation', component: NewConsultationComponent}
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
export class NewConsultationRoutingModule {}
