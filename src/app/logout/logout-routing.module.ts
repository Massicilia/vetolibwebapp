import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthGuard} from '../auth-guard.service';
import {LogoutComponent} from './logout.component';


const logoutRoutes: Routes = [
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forChild(logoutRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class LogoutRoutingModule { }
