import {SchedulerService} from "./scheduler.service";
import { Appointment} from "../model/appointment";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {empty} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class SchedulerResolver implements Resolve<Appointment[]> {
  constructor(private router : Router, private agendaService: SchedulerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.agendaService.getAgenda()
      .pipe();
  };
}
