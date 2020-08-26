import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NewHealthbookComponent} from './new-healthbook.component';

const newhealthbookRoutes: Routes = [
  { path: 'carnet/new/:idpetowner', component: NewHealthbookComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(newhealthbookRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// @ts-ignore
export class NewHealthbookRoutingModule { }
