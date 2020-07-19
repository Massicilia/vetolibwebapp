import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PageNotFoundComponent } from './page-not-found';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgottenPasswordComponent,
    ListAppointmentComponent,
    DetailsAppointmentComponent,
    ClientComponent,
    PetComponent,
    PersonalDetailsComponent,
    BillinginvoicesComponent,
    BillingComponent,
    InvoicesComponent,
    AppointmentComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
