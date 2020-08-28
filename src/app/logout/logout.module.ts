import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { LogoutRoutingModule } from './logout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LogoutRoutingModule
  ],
  declarations: [
    LogoutComponent
  ],
  providers: []
})
export class LogoutModule { }
