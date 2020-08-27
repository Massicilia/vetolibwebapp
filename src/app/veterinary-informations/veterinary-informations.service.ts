import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Veterinary} from '../model/veterinary';
import {Observable, of} from 'rxjs';
import {catchError, delay, tap} from 'rxjs/operators';

@Injectable()
// @ts-ignore
export class VeterinaryInformationsService {

  public isSuccessed: boolean = false;
  constructor(private http: HttpClient){};
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

  // Retourne le veterinary avec le nordinal passé en paramètre
  getVeterinary() {
    let nordinal = localStorage.getItem('nordinal');
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/veterinary/details?nordinal=' + nordinal;
    return this.http.get<Veterinary>(apiURL).pipe(
      tap(_=> this.log('getting veterinary')),
      catchError(this.handleError('getVeterinary',[]))
    );
  }

}
