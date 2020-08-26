import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Petowner} from '../model/petowner';
import {Pet} from '../model/pet';
import {Observable, of} from 'rxjs';
import {catchError, delay, tap} from 'rxjs/operators';
import {RequestOptions} from '@angular/http';


@Injectable()
export class HealthbookService {

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

  // Retourne le pet avec l'identifiant passé en paramètre
  getPet(id: number) {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/pet/details?idpet=' + id;
    return this.http.get<Pet>(apiURL).pipe(
      tap(_=> this.log('fetched pet')),
      catchError(this.handleError('getPet',[]))
    );
  }

  updatePet(pet: Pet): Observable<Pet> {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/pet';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Pet>(apiURL, pet, httpOptions)
      .pipe(
          delay(1000),
          tap(val => this.isSuccessed = true),
          catchError(this.handleError('updatePet', pet))
        );
  }

}
