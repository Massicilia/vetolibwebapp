import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import {Clinic} from '../model/clinic';

interface jQuery {
  datepicker():void;
}

@Component({
  selector: 'clinic-selection',
  templateUrl: './clinic-selection.component.html',
  providers:[]
})
// @ts-ignore
export class ClinicSelectionComponent implements OnInit {
  @Input()
  clinicname: string;

  nsiret:number;
  clinicchoice: boolean = true;
  clinics: Clinic[] = null;
  clinicsNames: string[] = null;
  mapNsiretName = new Map();
  message: string = null;

  control = new FormControl();
  filteredClinicsNames: Observable<string[]>;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {};

  ngOnInit(): void {
    console.log('clinicname : '+ this.clinicname);
    this.getClinics()
      .then(result => {
        this.clinicsNamesAutocomplete();
      });
  }

  getClinics(): Promise<Object> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = 'https://vetolibapi.herokuapp.com/api/v1/clinic/all';
      this.http
        .get<Clinic[]>(apiURL)
        .toPromise()
        .then((res: Clinic[]) => {
            this.clinics = res.map((res: Clinic) => {
              return res;
            });
            this.clinicsNames = this.clinicsNames || [];
            for (let index = 0; index < this.clinics.length; index++) {
              this.clinicsNames.push(this.clinics[index].name);
              this.mapNsiretName.set(this.clinics[index].name,this.clinics[index].nsiret);
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

  // autocomplete filter clinics names
  private _filterClinicsNames(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.clinicsNames.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  // autocomplete clinics names
  private clinicsNamesAutocomplete() {
    this.filteredClinicsNames = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filterClinicsNames(value))
    );
  }

  findClinic(){
    this.nsiret = this.mapNsiretName.get(this.clinicname);
    console.log('nsiret : '+this.nsiret);
    this.setMessage();

  }
  setMessage() {
    if(this.nsiret != null){
      this.message = 'La clinique a été trouvée'
    } else {
      this.message = 'La clinique n\'a pas été trouvée'
    }
  }
}
