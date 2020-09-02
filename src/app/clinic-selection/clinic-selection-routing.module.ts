import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClinicSelectionComponent }    from './clinic-selection.component';

const testRoutes: Routes = [
  { path: 'test', component: ClinicSelectionComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(testRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// @ts-ignore
export class ClinicSelectionRoutingModule { }
