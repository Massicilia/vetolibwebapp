import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { DetailsAppointmentComponent } from './details-appointment.component';
import { PetownerComponent } from './petowner.component';
import { AppointmentService } from './appointment.service';

@NgModule({
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ],
  declarations: [
    DetailsAppointmentComponent,
    PetownerComponent
  ],
  providers: [AppointmentService]
})
export class AppointmentModule { }
