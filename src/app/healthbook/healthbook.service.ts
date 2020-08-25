import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import { HttpClient } from '@angular/common/http';
import {Petowner} from '../model/petowner';


@Injectable()
export class HealthbookService {

  constructor(private http: HttpClient){};
  // Retourne le rendez-vous avec l'identifiant passé en paramètre
  getAppointment(id: number) {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/appointment/details?idappointment=' + id;
    return this.http.get<Appointment>(apiURL);
  }

  // Retourne le petowner avec l'identifiant passé en paramètre
  getPetowner(id: number) {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/petowner?idpetowner=' + id;
    return this.http.get<Petowner>(apiURL);
  }

}
