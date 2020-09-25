import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Pet } from '../model/pet';
import {Petowner} from '../model/petowner';

@Injectable()
export class HealthbookService {
  public idpet: number;
  public isSuccessed: boolean = false;

  constructor(private http: HttpClient){};

  /**
   * Retourne le pet avec l'identifiant passé en paramètre
   * @param id
   */
  getPet(id: number) {
    const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/pet/details?idpet=' + id;
    return this.http.get<Pet>(apiURL);
  }

  /**
   *
   * @param pet
   */
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

  /**
   *
   * @param idpet
   */
  getIdPet(): number{
    return this.idpet;
  }

  /**
   *
   * @param idpet
   */
  setIdPet(idpet: number){
    this.idpet = idpet;
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
    }
  }

  /**
   *
    * @param log
   */
  private log(log: string){
      console.info(log);
  }
}
