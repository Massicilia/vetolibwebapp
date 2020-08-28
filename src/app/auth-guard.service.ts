import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from './authentification/authentification.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (localStorage.getItem('token')!= null) {
      this.authService.redirectUrl = url;
      return true;
    }else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
