import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';

import { PersonalDetailsComponent } from './personal-details.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
    PersonalDetailsComponent,
  ],
  providers: []
})
export class AccountModule { }
