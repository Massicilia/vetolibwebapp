import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { DetailsAppointmentComponent } from './details-appointment.component';
import { PetownerComponent } from './petowner.component';
import { AppointmentService } from './appointment.service';
import {NewConsultationModule} from '../consultation-new/new-consultation.module';

@NgModule({
    imports: [
        CommonModule,
        AppointmentRoutingModule,
        NewConsultationModule
    ],
  declarations: [
    DetailsAppointmentComponent,
    PetownerComponent
  ],
  providers: [AppointmentService]
})
export class AppointmentModule { }
