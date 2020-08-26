import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppointmentService } from '../appointment/appointment.service';
import {Appointment} from '../model/appointment';
import {Pet} from '../model/pet';
import {HttpErrorResponse} from '@angular/common/http';
import {empty} from 'rxjs';
import {HealthbookService} from './healthbook.service';

@Component({
  selector: 'pet',
  templateUrl: './healthbook.component.html',
  providers: [AppointmentService]
})
export class HealthbookComponent implements OnInit {
  public pet: Pet = null;
  public message: string = null;
  public docreate: boolean = false;
  public isUpdated: boolean = false;
  public updateFailed: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private healthbookService: HealthbookService) {}

  ngOnInit(): void {
    let idpet = +this.route.snapshot.paramMap.get('idpet');
    if(idpet != null){
      this.route.data.subscribe(
        (data: { pet: Pet }) => {
        this.pet = data.pet;
        if(data.pet.idpet == null){
          this.docreate = true;
        };
        },
        err => {
          console.log('error status : '+ err.status);
          if(err.status == 404) this.docreate = true;
          console.log("couldn't get data, maybe show error to user "+ err.status); }
      )
    }

  }

  updatePet(pet:Pet): void {
      this.healthbookService.updatePet(pet).subscribe(
        data => {
          console.log('updated');
          this.setMessage();
        },
        error => {
          console.log(error.message);
          if(error != null){
            this.updateFailed = true;
          }
        });
  }
  setMessage() {
    this.message = this.healthbookService.isSuccessed ?
      'Le carnet de santé a été modifié' : 'La modification a échoué';
  }

}
