import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {StripePaymentComponent} from './stripe-payment.component';
import {StripePaymentRoutingModule} from './stripepayment-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StripePaymentRoutingModule
  ],
  declarations: [
    StripePaymentComponent
  ],
  providers: []
})

// @ts-ignore
export class StripePaymentModule { }
