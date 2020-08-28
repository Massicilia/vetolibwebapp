import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html'
})
//@ts-ignore
export class LogoutComponent implements OnInit {

  public message:string = null;
  constructor( private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    localStorage.clear();
    this.authentificationService.logout();
    let redirect = '/login';
    this.router.navigate([redirect]);
    this.message = 'Vous êtes déconnecté';
  }
}
