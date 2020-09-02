import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillingandinvoicesRoutingModule } from './billingandinvoices-routing.module';

import { BillinginvoicesComponent } from './billinginvoices.component';
import { InvoicesComponent } from './invoices.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BillingandinvoicesRoutingModule
  ],
  declarations: [
    BillinginvoicesComponent,
    InvoicesComponent
  ],
  providers: []
})
export class BillingandinvoicesModule { }
