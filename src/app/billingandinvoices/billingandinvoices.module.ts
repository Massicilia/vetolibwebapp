import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingandinvoicesRoutingModule } from './billingandinvoices-routing.module';

import { BillingComponent } from './billing.component';
import { BillinginvoicesComponent } from './billinginvoices.component';
import { InvoicesComponent } from './invoices.component';

@NgModule({
  imports: [
    CommonModule,
    BillingandinvoicesRoutingModule
  ],
  declarations: [
    BillingComponent,
    BillinginvoicesComponent,
    InvoicesComponent
  ],
  providers: []
})
export class BillingandinvoicesModule { }
