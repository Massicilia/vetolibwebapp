import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Connexion } from './login.component';

@Injectable()
export class AuthentificationService {
  constructor(private http: HttpClient) {}
  isLoggedIn: boolean = false;
  redirectUrl: string = '/agenda';

  /**
   *
   * @param email
   * @param password
   */
  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<Connexion>('https://vetolibapi.herokuapp.com/api/v1/veterinary/login', {email, password}, httpOptions)
      .pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true),
        catchError(this.handleError('connexion'))
      );
  }

  /**
   *
   */
  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
  }

  /**
   *
   * @param log
   */
  private log(log: string){
    console.info(log);
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
    };
  }
}
