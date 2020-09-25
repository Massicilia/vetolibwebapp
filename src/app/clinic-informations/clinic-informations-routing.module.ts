import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicInformationsComponent }    from './clinic-informations.component';
import { AuthGuard } from '../auth-guard.service';


const veterinaryInformationsRoutes: Routes = [
  { path: 'clinic/:nsiret', component: ClinicInformationsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(veterinaryInformationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ClinicInformationsRoutingModule { }
