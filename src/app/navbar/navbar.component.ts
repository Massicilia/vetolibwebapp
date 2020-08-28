import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
//@ts-ignore
export class NavbarComponent implements OnInit {
  public navbarVisibility : boolean = true;
  constructor(private router: Router, private location: Location){
  }

  ngOnInit(): void {

    setTimeout(() => console.log('location : '+ this.location.path() ), 10000);
    if(this.location.path() == '' || this.location.path() == '/login' || this.location.path() == '/motdepasse' || this.location.path() == '/inscription' || this.location.path() == '/logout' || this.location.path() == '/agenda'){
      this.navbarVisibility = false;
    }
  }
}
