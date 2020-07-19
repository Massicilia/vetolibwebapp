import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillinginvoicesComponent }    from './billinginvoices.component';
import { BillingComponent }    from './billing.component';
import { InvoicesComponent }    from './invoices.component';


const billingandinvoicesRoutes: Routes = [
  { path: 'facturation', component: BillinginvoicesComponent },
  { path: 'paiement', component: BillingComponent },
  { path: 'facturation/historique', component: InvoicesComponent }
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
