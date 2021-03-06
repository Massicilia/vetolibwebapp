import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Clinic } from '../model/clinic';

@Injectable()
export class NewClinicService {

  public nsiret: number = null;
  public isSuccessed: boolean = false;
  public isDuplicated: boolean = false;
  constructor(private http: HttpClient){};

  /**
   *
   * @param clinic
   */
  addClinic(clinic: Clinic): Observable<Clinic> {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/clinic';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Clinic>(apiURL, clinic, httpOptions)
      .pipe(
        tap(val => {
          this.isSuccessed = true;
          this.nsiret = clinic.nsiret;
        }),
        catchError(this.handleError('postClinic', clinic))
      );
  }

  /**
   *
   * @param nsiret
   */
  setNsiret(nsiret){
    this.nsiret = nsiret;
  }

  /**
   *
   * @param operation
   * @param result
   */
  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      this.isSuccessed = false;
      if(error.error.message == 'Clinic already exists') this.isDuplicated = true;
      console.log(error);
      console.log('${operation} failed: ${error.message }');
      return of(result as T);
    };
  }

}
