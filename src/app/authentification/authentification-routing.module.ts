import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }    from './login.component';
import { RegistrationComponent }    from './registration.component';
import { ForgottenPasswordComponent }    from './forgotten-password.component';


const authentificationRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: RegistrationComponent },
  { path: 'motdepasse', component: ForgottenPasswordComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authentificationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthentificationRoutingModule { }
