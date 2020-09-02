import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClinicSelectionRoutingModule } from './clinic-selection-routing.module';
import { FilterPipe } from './unique.pipe';
import { AuthGuard } from '../auth-guard.service';

import { ClinicSelectionComponent } from './clinic-selection.component';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClinicSelectionRoutingModule
  ],
  declarations: [
    ClinicSelectionComponent,
    FilterPipe
  ],
  exports: [
    ClinicSelectionComponent
  ],
  providers: [AuthGuard]
})
export class ClinicSelectionModule { }
