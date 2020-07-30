import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewAppointmentRoutingModule } from './new-appointment-routing.module';

import { NewAppointmentComponent } from './new-appointment.component';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NewAppointmentRoutingModule
  ],
  declarations: [
    NewAppointmentComponent,
  ],
  providers: []
})
export class NewAppointmentModule { }
