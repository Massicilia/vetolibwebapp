import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VeterinaryInformationsRoutingModule } from './veterinary-informations-routing.module';

import { VeterinaryInformationsComponent } from './veterinary-informations.component';
import { VeterinaryInformationsService } from './veterinary-informations.service';
import { ClinicInformationsModule } from '../clinic-informations/clinic-informations.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VeterinaryInformationsRoutingModule,
    ClinicInformationsModule
  ],
  declarations: [
    VeterinaryInformationsComponent,
  ],
  providers: [VeterinaryInformationsService]
})
export class VeterinaryInformationsModule { }
