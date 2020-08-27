import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html'
})
//@ts-ignore
export class LogoutComponent implements OnInit {

  constructor( private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout() {
    this.authentificationService.logout();
    let redirect = this.authentificationService.redirectUrl ? this.authentificationService.redirectUrl : '/rendez-vous';
    this.router.navigate([redirect]);
  }
}
