import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Veterinary} from '../model/veterinary';
import {Observable, of} from 'rxjs';
import {catchError, delay, tap} from 'rxjs/operators';
import {Pet} from '../model/pet';
import {Clinic} from '../model/clinic';

@Injectable()
// @ts-ignore
export class ClinicInformationsService {

  public isSuccessed: boolean = false;
  public isPsswdMissing: string = null;
  constructor(private http: HttpClient){};
  private log(log: string){
    console.info(log);
  }

  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error.message);
      console.log(error.error.error);
      this.isPsswdMissing = error.error.error;
      console.log('${operation} failed: ${error.message }');
      return of(result as T);
    };
  }

  // Retourne la clinique avec le nsiret passé en paramètre
  getClinic(nsiret:number) {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/clinic?nsiret=' + nsiret;
    return this.http.get<Clinic>(apiURL);
      /*.pipe(
      tap(_=> this.log('getting clinic')),
      catchError(this.handleError('getClinic',[]))
    );*/
  }

  updateClinic(clinic: Clinic): Observable<Clinic> {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/clinic';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Clinic>(apiURL, clinic, httpOptions)
      .pipe(
        delay(1000),
        tap(val => this.isSuccessed = true),
        catchError(this.handleError('updateClinic', clinic))
      );
  }


}
