import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewHealthbookRoutingModule } from './new-healthbook-routing.module';
import { NewHealthbookComponent} from './new-healthbook.component';
import { NewHealthbookService } from './new-healthbook.service';

@NgModule({
  imports: [
    CommonModule, NewHealthbookRoutingModule, FormsModule
  ],
  declarations: [
    NewHealthbookComponent,
  ],
  providers: [ NewHealthbookService]
})
// @ts-ignore
export class NewHealthbookModule { }
