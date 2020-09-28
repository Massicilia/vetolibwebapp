import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Consultation } from '../model/consultation';

@Injectable()
export class NewConsultationService {
  public isSuccessed: boolean = false;
  constructor(private http: HttpClient){};

  /**
   *
   * @param consultation
   */
  addConsultation(consultation: Consultation): Observable<Consultation> {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/consultation';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Consultation>(apiURL, consultation, httpOptions)
      .pipe(
        tap(val => {
          this.isSuccessed = true;
        }),
        catchError(this.handleError('postConsultation', consultation))
      );
  }
  /**
   *
   * @param operation
   * @param result
   */
  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      this.isSuccessed = false;
      console.log(error);
      console.log('${operation} failed: ${error.message }');
      return of(result as T);
    };
  }
}
