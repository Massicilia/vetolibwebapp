import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found';

// routes
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', data: { title: 'welcome', navbar: false} },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
//@ts-ignore
export class AppRoutingModule { }
