import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Petowner } from '../model/petowner';
import { Pet } from '../model/pet';
import { NewAppointmentService } from './new-appointment.service';
import {MatOption} from '@angular/material/core';
import {NewClinicComponent} from '../clinic-new/new-clinic.component';
import {SchedulerComponent} from '../scheduler/scheduler.component';
import {Veterinary} from '../model/veterinary';
import {Appointment} from '../model/appointment';
import {DatePipe} from '@angular/common';

interface jQuery {
  datepicker():void;
}

@Component({
  selector: 'appointment',
  templateUrl: './new-appointment.component.html',
  providers:[NewAppointmentService, DatePipe]
})
// @ts-ignore
export class NewAppointmentComponent implements OnInit {
  @ViewChild(SchedulerComponent) schedulerComponent: SchedulerComponent;
  petowners: Petowner[] = null;
  pets: Pet[] = null;
  petownersNames: string[] = null;
  petownersEmails: string[] = null;
  petsNames: string[] = null;
  idpetowner: number = null;
  arePetsdisplayed: number = 0;
  startDate: Date = new Date();
  message: string = null;
  success: boolean = false;
  appointment: Appointment;
  mapNordinal = new Map();
  petGroup: FormGroup;


  control = new FormControl();
  filteredNames: Observable<string[]>;
  filteredEmails: Observable<string[]>;
  filteredPets: Observable<string[]>;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private appointmentService: NewAppointmentService, private datePipe : DatePipe) {
    this.appointment = new Appointment();
  };

  ngOnInit(): void {
    this.petGroup = new FormGroup({
      pet: new FormControl()
    });
    this.getPetowners()
      .then(result => {
        this.petownersEmailsAutocomplete();
        this.petownersNamesAutocomplete();
      });
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
              this.mapNordinal.set(this.petowners[index].email,this.petowners[index].idpetowner);
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
      const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/pet/bypetowner?petowner_idpetowner=' + this.idpetowner;
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
    //const filterValue = value.toLowerCase();
    return this.petownersNames.filter(option => option.toLowerCase().indexOf(value) === 0);
  }

  // autocomplete filter petowners emails
  private _filterPetownersEmails(value: string): string[] {
    //const filterValue = value.toLowerCase();
    return this.petownersEmails.filter(option => option.toLowerCase().indexOf(value) === 0);
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

  // autocomplete filter petowners emails
  private _filterPets(value: string): string[] {
    //const filterValue = value.toLowerCase();
    return this.petsNames.filter(option => option.toLowerCase().indexOf(value) === 0);
  }

  // autocomplete petowners emails
  private petsAutocomplete() {
    this.filteredPets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPets(value))
    );
  }

  //recove selected email
  OnEmailSelected(option: MatOption) {
    this.petsNames = null;
    for (let index = 0; index < this.petowners.length; index++) {
      if (option.value == this.petowners[index].email) {
        this.idpetowner = this.petowners[index].idpetowner;
      }
    }
    this.getPets()
      .then(result => {
        this.arePetsdisplayed = 1;
        this.petsAutocomplete();
      })


  }

  //add an appointment
  addAppointment(appointment:Appointment){
    console.log('this.getDateFormatForAppointment()');
    console.log(this.getDateFormatForAppointment());
    //appointment.date = Date.parse(this.getDateFormatForAppointment());
    appointment.date = this.getDateFormatForAppointment();
    appointment.veterinary_nordinal = parseInt(localStorage.getItem('nordinal'), 10);
    appointment.petowner_idpetownerappoint = this.mapNordinal.get(appointment.petowner_idpetownerappoint);
    console.log('nordinal : '+ appointment.veterinary_nordinal);
    console.log('dateappoint : '+ appointment.date);
    console.log('petowner : '+ appointment.petowner_idpetownerappoint);
    console.log('pet : '+ appointment.pet_idpetappoint);
    console.log('reason : '+ appointment.reason);
    if(appointment.date != null){
      this.appointmentService.addAppointment(appointment).subscribe(
        data => {
          console.log('added '+ data);
          this.setMessage();
        },
        error => {
          console.log(error.message);
        });
    }else {
      this.message = 'La date est invalide';
    }

  }

  getDateFormatForAppointment(): Date{
    let dateappoint = this.schedulerComponent.exportDate;
    console.log('dateappoint : '+ dateappoint);
    let dateappointFormat = this.datePipe.transform(dateappoint, 'yyyy-MM-dd HH:mm:ss');
    console.log('dateappointFormat : '+ dateappointFormat);
    let date = new Date(dateappointFormat);
    console.log('date : '+ date);
    return date;
  }
  setMessage() {
      if(this.appointmentService.isSuccessed ){
        this.message = 'Le rendez-pris est pris.';
        this.success = true;
      }else {
        this.message =  'La prise de rendez-vous a échoué';
      }
    }
}
