import { Injectable } from '@angular/core';
import { Petowner } from '../model/petowner';
import { Pet } from '../model/pet';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Veterinary} from '../model/veterinary';
import {Appointment} from '../model/appointment';


@Injectable()
// @ts-ignore
export class NewAppointmentService {
  public isSuccessed:boolean = false;
  constructor(private http: HttpClient) {
  }
  addAppointment(appointment: Appointment): Observable<Appointment> {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/appointment';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Appointment>(apiURL, appointment, httpOptions)
      .pipe(
        tap(val => {
          this.isSuccessed = true;
          console.log('success');
        }),
        catchError(this.handleError('postAppointment', appointment))
      );
  }

  private log(log: string){
    console.info(log);
  }

  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failed: ${error.message }');
      return of(result as T);
    };
  }
}


