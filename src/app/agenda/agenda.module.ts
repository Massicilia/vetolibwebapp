import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaRoutingModule } from './agenda-routing.module';

import { ListAppointmentComponent } from './agenda.component';
import { AppointmentComponent } from './appointment.component';
import { DetailsAppointmentComponent } from './details-appointment.component';
import { ClientComponent } from './client.component';
import { PetComponent} from './pet.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  imports: [
    CommonModule,
    AgendaRoutingModule
  ],
  declarations: [
    ListAppointmentComponent,
    AppointmentComponent,
    DetailsAppointmentComponent,
    ClientComponent,
    PetComponent,

    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: []
})
export class AgendaModule { }
