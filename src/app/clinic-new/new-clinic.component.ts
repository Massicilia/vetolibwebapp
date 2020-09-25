import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {NewClinicService} from './new-clinic.service';
import {Clinic} from '../model/clinic';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Pet} from '../model/pet';
import {Petowner} from '../model/petowner';
import {Appointment} from '../model/appointment';
import {Veterinary} from '../model/veterinary';

@Component({
  selector: 'new-clinic',
  templateUrl: './new-clinic.component.html',
  providers: [NewClinicService]
})
// @ts-ignore
export class NewClinicComponent implements OnInit {
  public nsiret: number = null;
  public clinicchoice:boolean = true;
  public message: string;

  public clinic: Clinic;

  constructor(private route: ActivatedRoute, private router: Router, private newClinicService: NewClinicService) {}

  ngOnInit(): void {
    this.clinic = new Clinic();
  }

  addClinic(clinic:Clinic){

    console.log('name : '+ this.clinic.name);
    this.newClinicService.addClinic(clinic).subscribe(
      data => {
        console.log('added '+ data);
        this.setMessage(clinic.nsiret);
      },
      error => {
        console.log(error);
      });

  }

  setMessage(nsiret: number) {
    if(this.newClinicService.isDuplicated){
      this.message = ' Une clinique avec ces informations existe déjà'
    } else {
      if(this.newClinicService.isSuccessed ){
        this.message = 'La clinique a été ajoutée';
        this.nsiret = nsiret;
      }else {
        this.message =  'L\'ajout de la clinique a échoué';
      }
    }
  }

}
