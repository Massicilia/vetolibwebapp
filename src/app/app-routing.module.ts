import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './authentification/login.component';
import { RegistrationComponent } from './authentification/registration.component';
import { ForgottenPasswordComponent } from './authentification/forgotten-password.component';
import { ListAppointmentComponent } from './agenda/agenda.component';
import { DetailsAppointmentComponent } from './agenda/details-appointment.component';
import { ClientComponent } from './agenda/client.component';
import { PetComponent } from './agenda/pet.component';
import { PersonalDetailsComponent } from './account/personal-details.component';
import { BillinginvoicesComponent } from './billingandinvoices/billinginvoices.component';
import { BillingComponent } from './billingandinvoices/billing.component';
import { InvoicesComponent } from './billingandinvoices/invoices.component';
import { AppointmentComponent } from './agenda/appointment.component';
import { PageNotFoundComponent } from './page-not-found';

// routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
//@ts-ignore
export class AppRoutingModule { }
