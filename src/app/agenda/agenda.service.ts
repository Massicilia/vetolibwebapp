import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Appointment} from '../model/appointment';

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class AgendaDisplayService {

  constructor(private http: HttpClient) {
  }
  private agendaUrl = 'https://vetolibapi.herokuapp.com/api/v1/appointment/agenda/veterinary?veterinary_nordinal=6436';
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
  // get l'agenda du du veterinaire
  getAgenda(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.agendaUrl).pipe(
      tap(_=> this.log('fetch agenda')),
      catchError(this.handleError('getAgenda',[]))
    );
  }
}


