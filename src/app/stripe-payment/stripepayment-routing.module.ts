import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthGuard} from '../auth-guard.service';
import {StripePaymentComponent} from './stripe-payment.component';

const stripePaymentRoutes: Routes = [
  { path: 'paiement', component: StripePaymentComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(stripePaymentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StripePaymentRoutingModule { }
