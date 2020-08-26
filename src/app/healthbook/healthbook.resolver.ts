import { HealthbookService } from "./healthbook.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {Pet} from '../model/pet';
import {catchError, map, tap} from 'rxjs/operators';
import {empty, Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class HealthbookResolver implements Resolve<Pet> {
  constructor(private router : Router, private healthbookService: HealthbookService) {}

  private log(log: string){
    console.info(log);
  }

  errorHandler(error: any, caught: Observable<any>): Observable<any> {
    console.log('error caught: ', error);
    return error;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const idpet = route.params['idpet'];
    console.log('idpet resolver : '+ idpet);
    return this.healthbookService.getPet(idpet).pipe(
      catchError( (err: any, caught: Observable<any>) => {
        return throwError(this.errorHandler(err, caught)) } ) )
  }

}

