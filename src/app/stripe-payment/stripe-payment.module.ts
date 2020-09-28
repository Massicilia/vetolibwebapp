import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StripePaymentComponent } from './stripe-payment.component';
import { StripePaymentRoutingModule } from './stripepayment-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StripePaymentRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    StripePaymentComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
    ]
})

export class StripePaymentModule { }
