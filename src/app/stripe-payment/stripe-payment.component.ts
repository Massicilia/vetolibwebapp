import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Appointment} from '../model/appointment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css']
})
export class StripePaymentComponent implements OnDestroy, AfterViewInit {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  _totalAmount: number;
  card: any;
  cardHandler = this.onChange.bind(this);
  cardError: string;
  constructor(private cd: ChangeDetectorRef,
              private http: HttpClient,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private dialogRef: MatDialogRef<StripePaymentComponent>) {
      this._totalAmount = data['totalAmount'];
  }
  ngOnDestroy() {
    if (this.card) {
      // We remove event listener here to keep memory clean
      this.card.removeEventListener('change', this.cardHandler);
      this.card.destroy();
    }
  }
  ngAfterViewInit() {
    this.initiateCardElement();
  }
  initiateCardElement() {
    // Giving a base style here, but most of the style is in scss file
    const cardStyle = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.card = elements.create('card', {cardStyle});
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
  }
  onChange({error}) {
    if (error) {
      this.cardError = error.message;
    } else {
      this.cardError = null;
    }
    this.cd.detectChanges();
  }
  async createStripeToken() {
    const {token, error} = await stripe.createToken(this.card);
    if (token) {
      this.onSuccess(token);
      this.addCreditCard(token.id);
    } else {
      this.onError(error);
    }
  }
  onSuccess(token) {
    //this.dialogRef.close({token});
    console.log(token);
  }
  onError(error) {
    if (error.message) {
      this.cardError = error.message;
    }
  }
  addCreditCard(tokenID: string): Observable<string>{
      console.log('addcreditcard');
      const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/card-wallet';
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<string>(apiURL, tokenID, httpOptions)
        .pipe()
    }
}
