import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Appointment } from '../model/appointment';

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class AgendaDisplayService {
  private agendaUrl = 'https://vetolibapi.herokuapp.com/api/v1/appointment/agenda/veterinary?veterinary_nordinal='+ localStorage.getItem('nordinal');

  constructor(private http: HttpClient) {}

  /**
   *
   */
  getAgenda(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.agendaUrl).pipe(
      tap(_=> this.log('fetch agenda')),
      catchError(this.handleError('getAgenda',[]))
    );
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
  /**
   *
   * @param log
   */
  private log(log: string){
    console.info(log);
  }
}


