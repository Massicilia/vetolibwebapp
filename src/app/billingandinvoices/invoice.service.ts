import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Appointment} from '../model/appointment';
import {Invoice} from '../model/invoice';

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class InvoiceService {

  constructor(private http: HttpClient) {
  }
  private invoicesUrl = 'https://vetolibapi.herokuapp.com/api/v1/invoice/all?veterinary_nordinal=6436';
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
  // get les factures du du veterinaire
  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoicesUrl).pipe(
      tap(_=> this.log('fetch invoices')),
      catchError(this.handleError('getInvoices',[]))
    );
  }
}


