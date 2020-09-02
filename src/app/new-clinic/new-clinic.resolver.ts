import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {Clinic} from '../model/clinic';
import {NewClinicService} from './new-clinic.service';
import {catchError} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class NewClinicResolver implements Resolve<Clinic[]> {
  constructor(private router : Router, private newClinicService: NewClinicService) {
    console.log('resolver');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.newClinicService.getClinics()
      .pipe(
        catchError( (err: any, caught: Observable<any>) => {
        return throwError(this.errorHandler(err, caught)) } ) )
  };


  errorHandler(error: any, caught: Observable<any>): Observable<any> {
    console.log('error caught: ', error);
    return error;
  }
}
