import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetComponent} from '../healthbook/pet.component';
import {HealthbookService} from './healthbook.service';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PetComponent,
  ],
  providers: [ HealthbookService]
})
export class HealthbookModule { }
