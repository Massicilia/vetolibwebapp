import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';

import { NewAppointmentComponent } from './new-appointment.component';
import { DetailsAppointmentComponent } from './details-appointment.component';
import { ClientComponent } from './client.component';
import { PetComponent} from './pet.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ],
  declarations: [
    NewAppointmentComponent,
    DetailsAppointmentComponent,
    ClientComponent,
    PetComponent,

    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: []
})
export class AppointmentModule { }
