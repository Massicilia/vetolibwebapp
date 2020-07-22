import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { APPOINTMENTS } from './mock-appointments';

@Injectable()
export class AppointmentService {

  // Retourne tous les RENDEZ6VOUS
  getAppointments(): Appointment[] {
    return APPOINTMENTS;
  }

  // Retourne le rendez-vous avec l'identifiant passé en paramètre
  getAppointment(id: number): Appointment {
    let appointments = this.getAppointments();

    for(let index = 0; index < appointments.length; index++) {
      if(id === appointments[index].idappointment) {
        return appointments[index];
      }
    }
  }
}
