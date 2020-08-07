import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Petowner } from '../model/petowner';
import { Pet } from '../model/pet';
import { NewAppointmentService } from './new-appointment.service';

@Component({
  selector: 'appointment',
  templateUrl: './new-appointment.component.html',
  providers:[NewAppointmentService]
})
// @ts-ignore
export class NewAppointmentComponent implements OnInit {

  selectedOption:string = 'TEST';
  petowners: Petowner[] = null;
  petownersNames: string[] = null;
  petownersEmails: string[] = null;
  options: string[] = ['test','2','3','4','5','6',];
  pets: Pet[] = null;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private appointmentService: NewAppointmentService) {  }
  ngOnInit(): void {
    this.getPosts()
      .then(result => {
        console.log('result : '+ result);
        console.log('petowners : '+ this.petowners);
        // code to execute after the response arrived comes here
        this.petownersAutocomplete();
      });

    // this.petownersNames = this.getPetownersDetails();


    //this.getPets();
    //this.petsAutocomplete();
  }
  goBack(): void {
    this.router.navigate(['/agenda']);
    //window.history.back();
  }
  getPosts(): Promise<Object> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/petowner/all';
      this.http
        .get<Petowner[]>(apiURL)
        .toPromise()
        .then((res: Petowner[]) => {
            // Success
            console.log('after then ');
            this.petowners = res.map((res: Petowner) => {
              return res;
            });
            resolve();
          },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
/*
  getPetowners(): void {
    const data = this.http.get<Petowner[]>('https://vetolibapi.herokuapp.com/api/v1/petowner/all').subscribe(data => {
      this.petowners = data;
      console.log(data);
    });
    /*this.appointmentService.getPetowners()
      .subscribe(petowners => this.petowners = petowners);
    console.log('Petowners : ' + this.petowners); */ /*
  }

  getPetownersDetails(): any {
    var table: Petowner[] = null;
    const petownerPromise = new Promise((resolve, reject) => {
      console.log('PROMISE HTTP GET PETOWNER');
      resolve(this.http.get<Petowner[]>('https://vetolibapi.herokuapp.com/api/v1/petowner/all'))
    });

    console.log('Before calling then on Promise');

    petownerPromise.then( function(result) {
      table = result.json.petowners
      console.log('Greeting from promise:' + result);
      console.log(typeof(result));
    }, function(error) {
      // Do something with the error if it fails
    });
    /*this.http.get<Petowner[]>('https://vetolibapi.herokuapp.com/api/v1/petowner/all').subscribe(data => {
      this.petowners = data;
      console.log(data);
    });*/

    //var taille = Object.keys(this.petowners).length;
   /* for (let index = 0; index < this.petowners.length; index++) {
      console.log('getPetownersDetails for :' + index);
      this.petownersNames[index] = this.petowners[index].name;
      this.petownersEmails[index] = this.petowners[index].email;
      console.log(this.petowners[index].email);
    }
    return this.petownersNames;
  }*/
  /**/
  // autocomplete filter petowners
  private _filterPetowners(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.petownersNames = this.petownersNames || [];
    console.log('taille de petowners '+this.petowners.length );
    console.log('petowner '+this.petowners[0].name );
    for (let index = 0; index < this.petowners.length; index++) {
      console.log('petowner '+this.petowners[index].name );
      this.petownersNames.push(this.petowners[index].name);
      console.log('petowner exemple '+this.petownersNames[index] );
    }

    return this.petownersNames.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private petownersAutocomplete(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPetowners(value))
    );
  }





/*

  // autocomplete pets
  private _filterPets(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.petownersEmails.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private petsAutocomplete(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPets(value))
    );
  }
  getPets(): void {
    let idpetowner = +this.route.snapshot.paramMap.get('idpetowner');
    this.appointmentService.getPets(idpetowner)
      .subscribe(pets => this.pets = pets)
  } */
}
