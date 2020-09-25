import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewClinicRoutingModule } from './new-clinic-routing.module';
import { NewClinicComponent} from './new-clinic.component';
import { NewClinicService } from './new-clinic.service';

@NgModule({
  imports: [
    CommonModule,
    NewClinicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    NewClinicComponent,
  ],
  exports: [
    NewClinicComponent
  ],
  providers: [NewClinicService]
})
// @ts-ignore
export class NewClinicModule { }
