import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinaryInformationsRoutingModule } from './veterinary-informations-routing.module';

import { VeterinaryInformationsComponent } from './veterinary-informations.component';
import {VeterinaryInformationsService} from './veterinary-informations.service';

@NgModule({
  imports: [
    CommonModule,
    VeterinaryInformationsRoutingModule
  ],
  declarations: [
    VeterinaryInformationsComponent,
  ],
  providers: [VeterinaryInformationsService]
})
export class VeterinaryInformationsModule { }
