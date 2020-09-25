import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vetolib',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public navbarVisibility : boolean = false;
  constructor(private location: Location){
  }

  ngOnInit(): void {
    this.navbarVisibility = !(this.location.path() == '' || this.location.path() == '/login' || this.location.path() == '/motdepasse' || this.location.path() == '/inscription' || this.location.path() == '/logout' || this.location.path() == '/agenda');
  }
}
