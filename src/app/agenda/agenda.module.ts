import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AgendaComponent } from './agenda.component';

@NgModule({
  declarations: [ AgendaComponent ],
  imports: [ CommonModule, HttpModule, ScheduleAllModule, RecurrenceEditorAllModule,   NumericTextBoxAllModule, DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, CheckBoxAllModule, ToolbarAllModule,   DropDownListAllModule, ContextMenuAllModule, MaskedTextBoxModule, UploaderAllModule, MultiSelectAllModule, TreeViewModule, ButtonAllModule, BrowserModule],
  providers: [],
  bootstrap: [AgendaComponent]
})
// @ts-ignore
export class AgendaModule { }
