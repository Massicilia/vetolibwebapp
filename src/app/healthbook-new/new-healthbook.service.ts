import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Petowner} from '../model/petowner';
import {Pet} from '../model/pet';
import {Observable, of} from 'rxjs';
import {catchError, delay, tap} from 'rxjs/operators';

@Injectable()
export class NewHealthbookService {

  public isSuccessed: boolean = false;
  constructor(private http: HttpClient){};

  private handleError<T>(operation='operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failed: ${error.message }');
      return of(result as T);
    };
  }

  addPet(pet: Pet): Observable<Pet> {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/pet';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Pet>(apiURL, pet, httpOptions)
      .pipe(
          delay(1000),
          tap(val => this.isSuccessed = true),
          catchError(this.handleError('postPet', pet))
        );
  }

}
