import {AppointmentService} from "./appointment.service";
import { Appointment} from "../model/appointment";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Component, Injectable, ViewEncapsulation} from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AppointmentDetailsResolver implements Resolve<Appointment> {
  constructor(private router : Router, private appointmentService: AppointmentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const idappointment = route.params['id'];
    console.log('idappointment : '+ idappointment);
    return this.appointmentService.getAppointment(idappointment)
      .pipe();
  };
}

