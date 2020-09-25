import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHealthbookComponent } from './new-healthbook.component';
import { AuthGuard } from '../auth-guard.service';

const newhealthbookRoutes: Routes = [
  { path: 'carnet/new/:idpetowner', component: NewHealthbookComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(newhealthbookRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// @ts-ignore
export class NewHealthbookRoutingModule { }
