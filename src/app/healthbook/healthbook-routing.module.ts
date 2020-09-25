import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthbookComponent } from './healthbook.component';
import { AuthGuard } from '../auth-guard.service';
import { HealthbookModificationComponent } from '../healthbook-modification/healthbook-modification.component';

const healthbookRoutes: Routes = [
  { path: ':idappointment/:idpetowner', component: HealthbookComponent, canActivate: [AuthGuard], children: [
      { path: 'carnet', component: HealthbookModificationComponent}
  ]}
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
