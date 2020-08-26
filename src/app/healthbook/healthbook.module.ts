import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HealthbookRoutingModule } from './healthbook-routing.module';
import { HealthbookComponent} from './healthbook.component';
import { HealthbookService } from './healthbook.service';
@NgModule({
  imports: [
    CommonModule, HealthbookRoutingModule, FormsModule
  ],
  declarations: [
    HealthbookComponent,
  ],
  providers: [ HealthbookService]
})
export class HealthbookModule { }
