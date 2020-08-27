import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VeterinaryInformationsComponent }    from './veterinary-informations.component';
import { VeterinaryInformationsResolver } from './veterinary-informations.resolver';
import { AuthGuard } from '../auth-guard.service';


const veterinaryInformationsRoutes: Routes = [
  { path: 'informations', component: VeterinaryInformationsComponent, canActivate: [AuthGuard], resolve: { veterinary: VeterinaryInformationsResolver } }
];

@NgModule({
  imports: [
    RouterModule.forChild(veterinaryInformationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class VeterinaryInformationsRoutingModule { }
