import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Petowner} from '../model/petowner';
import {Pet} from '../model/pet';
import {Observable, of, throwError} from 'rxjs';
import {catchError, delay, tap} from 'rxjs/operators';
import {Clinic} from '../model/clinic';
import {Veterinary} from '../model/veterinary';

@Injectable()
export class NewClinicService {

  public nsiret: number = null;
  public isSuccessed: boolean = false;
  public isDuplicated: boolean = false;
  constructor(private http: HttpClient){};

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

  setNsiret(nsiret){
    this.nsiret = nsiret;
  }
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
