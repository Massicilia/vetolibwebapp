import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const healthbookRoutes: Routes = [

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
