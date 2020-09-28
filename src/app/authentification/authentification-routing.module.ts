import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }    from './login.component';
import { ForgottenPasswordComponent }    from './forgotten-password.component';
import { AuthentificationService } from './authentification.service';
import { AuthGuard } from '../auth-guard.service';

const authentificationRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'motdepasse', component: ForgottenPasswordComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authentificationRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthentificationService
  ]
})
export class AuthentificationRoutingModule { }
