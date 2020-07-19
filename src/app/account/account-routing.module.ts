import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalDetailsComponent }    from './personal-details.component';


const accountRoutes: Routes = [
  { path: 'moncompte', component: PersonalDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
