import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationRoutingModule } from './authentification-routing.module';

import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';
import { ForgottenPasswordComponent } from './forgotten-password.component';

@NgModule({
  imports: [
    CommonModule,
    AuthentificationRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgottenPasswordComponent
  ],
  providers: []
})
export class AuthentificationModule { }
