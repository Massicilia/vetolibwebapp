import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewConsultationRoutingModule } from './new-consultation-routing.module';
import { NewConsultationComponent} from './new-consultation.component';
import { NewConsultationService } from './new-consultation.service';

@NgModule({
  imports: [
    CommonModule,
    NewConsultationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    NewConsultationComponent,
  ],
  exports: [
    NewConsultationComponent
  ],
  providers: [NewConsultationService]
})
// @ts-ignore
export class NewConsultationModule { }
