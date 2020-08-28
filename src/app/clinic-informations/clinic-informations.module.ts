import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClinicInformationsRoutingModule } from './clinic-informations-routing.module';

import { ClinicInformationsComponent } from './clinic-informations.component';
import { ClinicInformationsService } from './clinic-informations.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClinicInformationsRoutingModule
  ],
  declarations: [
    ClinicInformationsComponent,
  ],
  exports: [
    ClinicInformationsComponent
  ],
  providers: [ClinicInformationsService]
})
export class ClinicInformationsModule { }
