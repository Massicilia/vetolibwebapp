import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillinginvoicesComponent }    from './billinginvoices.component';
import { InvoicesComponent }    from './invoices.component';
import {AuthGuard} from '../auth-guard.service';
import {InvoiceResolver} from './invoice.resolver';

const billingandinvoicesRoutes: Routes = [
  { path: 'facturation', component: BillinginvoicesComponent, canActivate: [AuthGuard], resolve: { invoices: InvoiceResolver } },
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
