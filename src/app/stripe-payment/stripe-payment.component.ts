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
              private dialogRef: MatDialogRef<StripePaymentComponent>,
              private _elementRef : ElementRef) {
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
    this.getSetupIntent()
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
  getStripeElements(setupIntent) {
      this.changeLoadingState(true);
      var email = this._elementRef.nativeElement.querySelector(`email`);
      stripe
        .confirmCardSetup(setupIntent.client_secret, {
          payment_method: {
            card: this.card,
            billing_details: { email: email }
          }
        })
        .then(function(result) {
          if (result.error) {
            this.changeLoadingState(false);
            var displayError = this._elementRef.nativeElement.querySelector(`card-errors`);
            displayError.textContent = result.error.message;
          } else {
            // The PaymentMethod was successfully set up
            this.orderComplete(stripe, setupIntent.client_secret);
          }
        });
    }
  getSetupIntent() {
    let bodyParams = {veterinary_nordinal : localStorage.getItem('nordinal')};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<string>("https://vetolibapi.herokuapp.com/api/v1/card-wallet/createsetupintent", bodyParams, httpOptions)
      .toPromise()
      .then(function(response) {
        console.log('reponse : '+ response);
        return response;
      })
      .then(function(setupIntent) {
        console.log(setupIntent);
        this.getStripeElements(setupIntent);
      });
  }
  changeLoadingState(isLoading) {
    if (isLoading) {
      document.querySelector("button").disabled = true;
      document.querySelector("#spinner").classList.remove("hidden");
      document.querySelector("#button-text").classList.add("hidden");
    } else {
      document.querySelector("button").disabled = false;
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#button-text").classList.remove("hidden");
    }
  }
  /* Shows a success / error message when the payment is complete */
  orderComplete(stripe, clientSecret) {
    stripe.retrieveSetupIntent(clientSecret).then(function(result) {
      var setupIntent = result.setupIntent;
      var setupIntentJson = JSON.stringify(setupIntent, null, 2);

      document.querySelector(".sr-payment-form").classList.add("hidden");
      document.querySelector(".sr-result").classList.remove("hidden");
      document.querySelector("pre").textContent = setupIntentJson;
      setTimeout(function() {
        document.querySelector(".sr-result").classList.add("expand");
      }, 200);

      this.changeLoadingState(false);
    });
  }

}
