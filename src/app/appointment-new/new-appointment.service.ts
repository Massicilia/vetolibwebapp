import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Appointment } from '../model/appointment';

@Injectable()

export class NewAppointmentService {
  public isSuccessed:boolean = false;
  constructor(private http: HttpClient) {}

  /**
   *
   * @param appointment
   */
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

  /**
   *
   * @param log
   */
  private log(log: string){
    console.info(log);
  }

  /**
   *
   * @param operation
   * @param result
   */
  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failed: ${error.message }');
      return of(result as T);
    };
  }
}


