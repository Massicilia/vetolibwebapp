import { Injectable } from '@angular/core';
import { Petowner } from '../model/petowner';
import { Pet } from '../model/pet';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()
// @ts-ignore
export class NewAppointmentService {

  constructor(private http: HttpClient) {
  }
  private appointmentUrl = 'https://vetolibapi.herokuapp.com/api/v1/';
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
  // Retourne tous les petowners
  getPetowners(): Observable<Petowner[]> {
    return this.http.get<Petowner[]>(this.appointmentUrl + 'petowner/all').pipe(
      tap(_=> this.log('fetched petowners')),
      catchError(this.handleError('getPetowners',[]))
    );
  }

  // Retourne la liste des animaux d'un petowner par son id passé en paramètre
  getPets(idpetowner: number): Observable<Pet[]> {
    const url = '${this.appointment}+petbypetowner?petowner_idpetowner=/${idpetowner}';

    return this.http.get<Pet[]>(url).pipe(
      tap(_ => this.log('fetched pets id=${idpetowner}')),
      catchError(this.handleError('getPet is=${idpetowner', []))
    );
  }
}


