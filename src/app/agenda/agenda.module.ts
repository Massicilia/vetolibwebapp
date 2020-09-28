import { NgModule } from '@angular/core';
import { AgendaComponent } from './agenda.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaResolver } from './agenda.resolver';
import { AgendaService } from '@syncfusion/ej2-angular-schedule';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [ AgendaComponent ],
  imports: [ BrowserModule, CalendarModule, AgendaRoutingModule, NavbarModule ],
  providers: [ AgendaResolver, AgendaService ],
  bootstrap: []
})

export class AgendaModule {

}
