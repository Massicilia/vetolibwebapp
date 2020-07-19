import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { AgendaModule } from './agenda/agenda.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { BillingandinvoicesModule } from './billingandinvoices/billingandinvoices.module';

import { AppComponent } from './app.component';


import { PageNotFoundComponent } from './page-not-found';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    AgendaModule,
    AuthentificationModule,
    BillingandinvoicesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
