import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Veterinary} from '../model/veterinary';
import {Observable, of} from 'rxjs';
import {catchError, delay, tap} from 'rxjs/operators';
import {Pet} from '../model/pet';

@Injectable()
// @ts-ignore
export class VeterinaryInformationsService {

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

  // Retourne le veterinary avec le nordinal passé en paramètre
  getVeterinary() {
    let nordinal = localStorage.getItem('nordinal');
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/veterinary?nordinal=' + nordinal;
    return this.http.get<Veterinary>(apiURL).pipe(
      tap(_=> this.log('getting veterinary')),
      catchError(this.handleError('getVeterinary',[]))
    );
  }

  updateVeterinary(veterinary: Veterinary): Observable<Veterinary> {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/veterinary';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Veterinary>(apiURL, veterinary, httpOptions)
      .pipe(
        delay(1000),
        tap(val => this.isSuccessed = true),
        catchError(this.handleError('updateVeterinary', veterinary))
      );
  }


}
