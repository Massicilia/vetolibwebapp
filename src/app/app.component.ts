import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vetolib',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navbarVisibility : boolean = true;
  constructor(private location: Location){}

  ngOnInit(){
    if(this.location.path() == '' || this.location.path() == '/login' || this.location.path() == '/motdepasse' || this.location.path() == '/inscription' ){
      this.navbarVisibility = false;
    }
  }
}
