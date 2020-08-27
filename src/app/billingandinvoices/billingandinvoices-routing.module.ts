import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillinginvoicesComponent }    from './billinginvoices.component';
import { BillingComponent }    from './billing.component';
import { InvoicesComponent }    from './invoices.component';
import {AuthGuard} from '../auth-guard.service';
import {NewAppointmentComponent} from '../new-appointment/new-appointment.component';


const billingandinvoicesRoutes: Routes = [
  { path: 'facturation', component: BillinginvoicesComponent, canActivate: [AuthGuard] },
  { path: 'paiement', component: BillingComponent, canActivate: [AuthGuard] },
  { path: 'facturation/historique', component: InvoicesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(billingandinvoicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BillingandinvoicesRoutingModule { }
