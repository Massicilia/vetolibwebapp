import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HealthbookModificationRoutingModule } from './healthbook-modification-routing.module';
import { HealthbookModificationComponent } from './healthbook-modification.component';
import { HealthbookService } from '../healthbook/healthbook.service';

@NgModule({
  imports: [
    CommonModule, HealthbookModificationRoutingModule, FormsModule
  ],
  declarations: [
    HealthbookModificationComponent,
  ],
  exports: [
    HealthbookModificationComponent
  ],
  providers: [HealthbookService]
})
export class HealthbookModificationModule { }
