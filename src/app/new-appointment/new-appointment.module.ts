import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { NewAppointmentRoutingModule } from './new-appointment-routing.module';
import { FilterPipe } from './unique.pipe';
import { AuthGuard } from '../auth-guard.service';

import { NewAppointmentComponent } from './new-appointment.component';
import {SchedulerModule} from '../scheduler/scheduler.module';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SchedulerModule,
    NewAppointmentRoutingModule
  ],
  declarations: [
    NewAppointmentComponent,
    FilterPipe
  ],
  providers: [AuthGuard]
})
export class NewAppointmentModule { }
