import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';
import { ForgottenPasswordComponent } from './forgotten-password.component';
import { ListAppointmentComponent } from './agenda.component';
import { DetailsAppointmentComponent } from './details-appointment.component';
import { ClientComponent } from './client.component';
import { PetComponent } from './pet.component';
import { PersonalDetailsComponent } from './personal-details.component';
import { BillinginvoicesComponent } from './billinginvoices.component';
import { BillingComponent } from './billing.component';
import { InvoicesComponent } from './invoices.component';
import { AppointmentComponent } from './appointment.component';
import { PageNotFoundComponent } from './page-not-found';

// routes
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: RegistrationComponent },
  { path: 'motdepasse', component: ForgottenPasswordComponent },
  { path: 'agenda', component: ListAppointmentComponent },
  { path: 'agenda/:id', component: DetailsAppointmentComponent },
  { path: 'agenda/:id/:idclient', component: ClientComponent },
  { path: 'agenda/:id/animal/:idanimal', component: PetComponent },
  { path: 'compte', component: PersonalDetailsComponent },
  { path: 'facturation', component: BillinginvoicesComponent },
  { path: 'paiement', component: BillingComponent },
  { path: 'facturation/historique', component: InvoicesComponent },
  { path: 'rendez-vous', component: AppointmentComponent },
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
