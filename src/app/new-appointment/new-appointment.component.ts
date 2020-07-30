import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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
  petowners: Petowner[] = null;
  petownersNames: string[] = null;
  petownersEmails: string[] = null;
  pets: Pet[] = null;
  test: string[] = ['aest1', 'test2', 'mest3', 'zest4'];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private route: ActivatedRoute, private router: Router, private appointmentService: NewAppointmentService) {}

  ngOnInit(): void {
    //this.getPetowners();
    this.petownersAutocomplete();

    //this.getPets();
    //this.petsAutocomplete();
  }

  goBack(): void {
    this.router.navigate(['/agenda']);
    //window.history.back();
  }

  getPetowners(): void {
    this.appointmentService.getPetowners()
      .subscribe(petowners => this.petowners = petowners);

    for(let index = 0; index < this.petowners.length; index++) {
      this.petownersNames[index] = this.petowners[index].name;
      this.petownersEmails[index] = this.petowners[index].email;
      }
  }

  getPets(): void {
    let idpetowner = +this.route.snapshot.paramMap.get('idpetowner');
    this.appointmentService.getPets(idpetowner)
      .subscribe(pets => this.pets = pets)
  }

  // autocomplete filter petowners
  private _filterPetowners(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.test.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private petownersAutocomplete(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPetowners(value))
    );
  }

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
}
