import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { VeterinaryInformationsModule } from './veterinary-informations/veterinary-informations.module';
import { AgendaModule } from './agenda/agenda.module';
import { AppointmentModule } from './appointment/appointment.module';
import { HealthbookModule } from './healthbook/healthbook.module';
import { HealthbookModificationModule } from './healthbook-modification/healthbook-modification.module';
import { NewAppointmentModule } from './new-appointment/new-appointment.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { LogoutModule } from './logout/logout.module';
import { BillingandinvoicesModule } from './billingandinvoices/billingandinvoices.module';
import { NewHealthbookModule } from './healthbook-new/new-healthbook.module';
import { NavbarModule } from './navbar/navbar.module';
import { ClinicInformationsModule } from './clinic-informations/clinic-informations.module';
import { RegistrationModule } from './registration/registration.module';
import { NewClinicModule } from './clinic-new/new-clinic.module';
import { ClinicSelectionModule } from './clinic-selection/clinic-selection.module';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found';
import { StripePaymentModule } from './stripe-payment/stripe-payment.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    VeterinaryInformationsModule,
    AgendaModule,
    AppointmentModule,
    NewAppointmentModule,
    AuthentificationModule,
    BillingandinvoicesModule,
    HealthbookModule,
    HealthbookModificationModule,
    NewHealthbookModule,
    LogoutModule,
    NavbarModule,
    ClinicInformationsModule,
    RegistrationModule,
    NewClinicModule,
    ClinicSelectionModule,
    StripePaymentModule,
    SchedulerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
