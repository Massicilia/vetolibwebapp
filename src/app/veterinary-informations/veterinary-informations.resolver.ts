import { Appointment} from "../model/appointment";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {VeterinaryInformationsService} from './veterinary-informations.service';
import {Veterinary} from '../model/veterinary';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: "root"
})
// @ts-ignore
export class VeterinaryInformationsResolver implements Resolve<Veterinary> {
  constructor(private router : Router, private veterinaryInformationsService: VeterinaryInformationsService) {}

  errorHandler(error: any, caught: Observable<any>): Observable<any> {
    console.log('error caught: ', error);
    return error;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.veterinaryInformationsService.getVeterinary()
      .pipe(
        catchError( (err: any, caught: Observable<any>) =>
        {
          return throwError(this.errorHandler(err, caught))
        }
        ))
  };
}

