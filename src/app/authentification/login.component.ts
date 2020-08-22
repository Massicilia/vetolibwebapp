import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';

export class Connexion {
  email : string;
  password : string
}
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  message: string = null;
  email: string;
  password: string;
  isLoggedIn: boolean = false;
  connexion: Connexion = new Connexion();

  constructor( private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  setMessage() {
    this.message = this.authentificationService.isLoggedIn ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.connexion.email = this.email;
    this.connexion.password = this.password;
    this.authentificationService.login(this.email, this.password).subscribe(data => {
      console.log('data : '+ data.token);
      console.log('data : '+ data.nsiret);
      this.setMessage();
      if (this.authentificationService.isLoggedIn) {
        this.isLoggedIn = true;
        let redirect = this.authentificationService.redirectUrl ? this.authentificationService.redirectUrl : '/rendez-vous';
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    });
  }


  logout() {
    this.authentificationService.logout();
    this.setMessage();
  }
}
