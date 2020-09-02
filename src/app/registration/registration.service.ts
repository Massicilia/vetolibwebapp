import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {tap, delay, catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Veterinary} from '../model/veterinary';
import {Appointment} from '../model/appointment';
import {Clinic} from '../model/clinic';

@Injectable()
export class RegistrationService {
  public isSuccessed:boolean = false;
  public isDuplicated:boolean = false;
  constructor(private http: HttpClient) {
  }

  addVeterinary(veterinary: Veterinary): Observable<Veterinary> {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/veterinary/register';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Veterinary>(apiURL, veterinary, httpOptions)
      .pipe(
        tap(val => {
          this.isSuccessed = true;
          console.log('success');
        }),
        catchError(this.handleError('postVeterinary', veterinary))
      );
  }

  getClinic(nsiret: number) {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/clinic/details?nsiret=' + nsiret;
    return this.http.get<Clinic>(apiURL);
  }
  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      this.isSuccessed = false;
      if(error.error.message == 'Veterinary already exists') this.isDuplicated = true;
      console.log(error);
      console.log('${operation} failed: ${error.message }');
      return of(result as T);
    };
  }
}
