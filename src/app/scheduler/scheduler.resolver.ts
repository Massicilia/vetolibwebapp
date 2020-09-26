import { SchedulerService } from "./scheduler.service";
import { Appointment } from "../model/appointment";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class SchedulerResolver implements Resolve<Appointment[]> {
  constructor(private router : Router,
              private agendaService: SchedulerService) {}

  /**
   *
    * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.agendaService.getAgenda()
      .pipe(
        catchError(
          (err: any, caught: Observable<any>) => {
            return throwError(this.errorHandler(err, caught))
          }
        ))
  };
  /**
   *
   * @param error
   * @param caught
   */
  errorHandler(error: any, caught: Observable<any>): Observable<any> {
    console.log('error caught: ', error);
    return error;
  }
}
