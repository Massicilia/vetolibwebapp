import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthbookModificationComponent } from './healthbook-modification.component';
import { AuthGuard } from '../auth-guard.service';

const healthbookRoutes: Routes = [
  { path: 'carnet', component: HealthbookModificationComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(healthbookRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HealthbookModificationRoutingModule { }
