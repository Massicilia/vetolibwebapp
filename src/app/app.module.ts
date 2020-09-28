import { CommonModule } from '@angular/common';
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
import { NewConsultationModule } from './consultation-new/new-consultation.module';
import { ClinicSelectionModule } from './clinic-selection/clinic-selection.module';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found';
import { StripePaymentModule } from './stripe-payment/stripe-payment.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { StripeModule } from 'stripe-angular';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
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
    StripeModule.forRoot("pk_test_51HM2DTGVBJFFbfQT6801jISmTHsxuGPrL9Icrrun7AgBKbobG0MaxcUPm9anfnA60U53L7gX3RTMN0hxdxnFq8tQ00VRODNzsZ"),
    NewConsultationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
