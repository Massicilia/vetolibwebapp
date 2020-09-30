import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatOption } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { SchedulerComponent } from '../scheduler/scheduler.component';
import { Appointment } from '../model/appointment';
import { Petowner } from '../model/petowner';
import { Pet } from '../model/pet';
import { NewAppointmentService } from './new-appointment.service';

@Component({
  selector: 'appointment',
  templateUrl: './new-appointment.component.html',
  providers:[ NewAppointmentService, DatePipe ]
})

export class NewAppointmentComponent implements OnInit {
  @ViewChild(SchedulerComponent) schedulerComponent: SchedulerComponent;
  petowners: Petowner[] = null;
  pets: Pet[] = null;
  petownersNames: string[] = null;
  petownersEmails: string[] = null;
  petsNames: string[] = null;
  idpetowner: number = null;
  arePetsdisplayed: number = 0;
  message: string = null;
  success: boolean = false;
  appointment: Appointment;
  mapNordinal = new Map();
  petGroup: FormGroup;

  control = new FormControl();
  filteredNames: Observable<string[]>;
  filteredEmails: Observable<string[]>;
  filteredPets: Observable<string[]>;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private appointmentService: NewAppointmentService,
              private datePipe : DatePipe) {
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
  /**
   *
   * @param appointment
   */
  private addAppointment(appointment:Appointment){
    appointment.date = this.getDateFormatForAppointment();
    appointment.veterinary_nordinal = parseInt(localStorage.getItem('nordinal'), 10);
    appointment.petowner_idpetownerappoint = this.mapNordinal.get(appointment.petowner_idpetownerappoint);
    if(appointment.date != null && appointment.pet_idpetappoint != null){
      appointment.pet_idpetappoint = this.getPetID(appointment.petowner_idpetownerappoint, appointment.pet_idpetappoint.toString());
      this.appointmentService.addAppointment(appointment).subscribe(
        data => {
          this.setMessage();
          appointment = null;
        },
        error => {
          console.log(error.message);
        });
    }else {
      this.message = appointment.date == null?'La date est invalide':'Veuillez remplir tous les champs';
    }
  }
  /**
   *
   * @param idPetowner
   * @param namePet
   */
  private getPetID(idPetowner: number, namePet: string): number{
    var idpet = 0;
      for ( let i = 0; i<this.pets.length; i++){
        if(this.pets[i].petowner_idpetowner == idPetowner && this.pets[i].name == namePet){
          idpet = this.pets[i].idpet;
        }
    }
      return idpet;
  }
  /**
   * get list petowners
   */
  private getPetowners(): Promise<Object> {
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
  /**
   * get pets by petowner
   */
  private getPets(): Promise<Object> {
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
  /**
   * autocomplete filter petowners names
   * @param value
   * @private
   */
  private _filterPetownersNames(value: string): string[] {
    //const filterValue = value.toLowerCase();
    return this.petownersNames.filter(option => option.toLowerCase().indexOf(value) === 0);
  }
  /**
   * autocomplete filter petowners emails
   * @param value
   * @private
   */
  private _filterPetownersEmails(value: string): string[] {
    //const filterValue = value.toLowerCase();
    return this.petownersEmails.filter(option => option.toLowerCase().indexOf(value) === 0);
  }
  /**
   * autocomplete petowners emails
   */
  private petownersEmailsAutocomplete() {
    this.filteredEmails = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPetownersEmails(value))
    );
  }
  /**
   * autocomplete petowners names
   */
  private petownersNamesAutocomplete() {
    this.filteredNames = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPetownersNames(value))
    );
  }
  /**
   * autocomplete filter petowners emails
   * @param value
   * @private
   */
  private _filterPets(value: string): string[] {
    //const filterValue = value.toLowerCase();
    return this.petsNames.filter(option => option.toLowerCase().indexOf(value) === 0);
  }
  /**
   * autocomplete pets emails
   */
  private petsAutocomplete() {
    this.filteredPets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPets(value))
    );
  }
  /**
   *
   * @param option
   * @constructor
   */
  private OnEmailSelected(option: MatOption) {
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
  /**
   * date by scheduler
   * returns Date in format yyyy-MM-dd HH:mm:ss
   */
  private getDateFormatForAppointment(): Date{
    let dateappoint = this.schedulerComponent.exportDate;
    let dateappointFormat = this.datePipe.transform(dateappoint, 'yyyy-MM-dd HH:mm:ss');
    let date = new Date(dateappointFormat);
    return date;
  }
  /**
   * error message
   */
  private setMessage() {
      if(this.appointmentService.isSuccessed ){
        this.message = 'Le rendez-pris est pris.';
        this.success = true;
      }else {
        this.message =  'La prise de rendez-vous a échoué';
      }
    }
}
