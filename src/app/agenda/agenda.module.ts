import { NgModule } from '@angular/core';
import { AgendaComponent } from './agenda.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AgendaRoutingModule } from './agenda-routing.module';
@NgModule({
  declarations: [AgendaComponent],
  imports: [ BrowserModule, CalendarModule, AgendaRoutingModule ],
  providers: [],
  bootstrap: []
})

export class AgendaModule {

}
