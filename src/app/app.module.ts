import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { AgendaModule } from './agenda/agenda.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { BillingandinvoicesModule } from './billingandinvoices/billingandinvoices.module';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    AccountModule,
    AgendaModule,
    AppointmentModule,
    AuthentificationModule,
    BillingandinvoicesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
