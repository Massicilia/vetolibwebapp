import { NgModule } from '@angular/core';
import { SchedulerComponent } from './scheduler.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SchedulerResolver } from './scheduler.resolver';
import { AgendaService } from '@syncfusion/ej2-angular-schedule';
import {NavbarModule} from '../navbar/navbar.module';
import {DateTimePickerModule} from '@syncfusion/ej2-angular-calendars';
@NgModule({
  declarations: [SchedulerComponent],
  imports: [BrowserModule, CalendarModule, SchedulerRoutingModule, NavbarModule, DateTimePickerModule],
  providers: [SchedulerResolver, AgendaService],
  exports: [
    SchedulerComponent
  ],
  bootstrap: []
})

export class SchedulerModule {

}
