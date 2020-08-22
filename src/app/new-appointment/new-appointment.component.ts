import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Petowner } from '../model/petowner';
import { Pet } from '../model/pet';
import { NewAppointmentService } from './new-appointment.service';
import {MatOption} from '@angular/material/core';

interface jQuery {
  datepicker():void;
}

@Component({
  selector: 'appointment',
  templateUrl: './new-appointment.component.html',
  providers:[NewAppointmentService]
})
// @ts-ignore
export class NewAppointmentComponent implements OnInit {

  petowners: Petowner[] = null;
  pets: Pet[] = null;
  petownersNames: string[] = null;
  petownersEmails: string[] = null;
  petsNames: string[] = null;
  idpetowner: number = null;
  arePetsdisplayed: number = 0;
  startDate: Date = new Date();

  control = new FormControl();
  filteredNames: Observable<string[]>;
  filteredEmails: Observable<string[]>;


  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private appointmentService: NewAppointmentService) {};

  ngOnInit(): void {
    this.getPetowners()
      .then(result => {
        this.petownersEmailsAutocomplete();
        this.petownersNamesAutocomplete();
      });
  }

  goBack(): void {
    this.router.navigate(['/agenda']);
    //window.history.back();
  }

  getPetowners(): Promise<Object> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/petowner/all';
      this.http
        .get<Petowner[]>(apiURL)
        .toPromise()
        .then((res: Petowner[]) => {
            this.petowners = res.map((res: Petowner) => {
              return res;
            });
            this.petownersNames = this.petownersNames || [];
            this.petownersEmails = this.petownersEmails || [];
            for (let index = 0; index < this.petowners.length; index++) {
              this.petownersNames.push(this.petowners[index].name + " " + this.petowners[index].surname);
              this.petownersEmails.push(this.petowners[index].email);
            }
            resolve();
          },
          err => {
            reject(err);
          }
        );
    });
    return promise;
  }

  getPets(): Promise<Object> {
    const promise = new Promise((resolve, reject) => {
      console.log('idpetowner : ' + this.idpetowner);
      const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/pet/bypetowner?petowner_idpetowner=' + this.idpetowner;
      console.log('apiURL : ' + apiURL);
      this.http
        .get<Pet[]>(apiURL)
        .toPromise()
        .then((res: Pet[]) => {
            this.pets = res.map((res: Pet) => {
              return res;
            });
            this.petsNames = this.petsNames || [];
            for (let index = 0; index < this.pets.length; index++) {
              this.petsNames.push(this.pets[index].name);
              console.log('pet name : ' + this.petsNames[index]);
            }
            resolve();
          },
          err => {
            reject(err);
          }
        );
    });
    return promise;
  }

  // autocomplete filter petowners names
  private _filterPetownersNames(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.petownersNames.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  // autocomplete filter petowners emails
  private _filterPetownersEmails(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.petownersEmails.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  // autocomplete petowners emails
  private petownersEmailsAutocomplete() {
    this.filteredEmails = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPetownersEmails(value))
    );
  }

  // autocomplete petowners names
  private petownersNamesAutocomplete() {
    this.filteredNames = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPetownersNames(value))
    );
  }

  //recove selected email
  OnEmailSelected(option: MatOption) {
    this.petsNames = null;
    console.log('email selected : ' + option.value);
    for (let index = 0; index < this.petowners.length; index++) {
      if (option.value == this.petowners[index].email) {
        this.idpetowner = this.petowners[index].idpetowner;
      }
    }
    console.log('idpetowner : ' + this.idpetowner);
    this.getPets()
      .then(result => {
        this.arePetsdisplayed = 1;
        console.log('get pets list');
      })
  }
}
