import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppointmentService } from '../appointment/appointment.service';
import {Appointment} from '../model/appointment';
import {Pet} from '../model/pet';
import {HealthbookService} from './healthbook.service';

@Component({
  selector: 'pet',
  templateUrl: './healthbook.component.html',
  providers: [AppointmentService]
})
export class HealthbookComponent implements OnInit {
  public appointment: Appointment = null;
  public pet: Pet = null;
  public idappointment:number;
  public idpetowner:number;
  public message: string = null;
  public docreate: boolean = false;
  public updateFailed: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private healthbookService: HealthbookService, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    console.log('docreate : '+this.docreate);
    //get route params
    this.idappointment = +this.route.snapshot.paramMap.get('idappointment');
    this.idpetowner = +this.route.snapshot.paramMap.get('idpetowner');
    //get idpet by getting appointment then display the form
    this.appointmentService.getAppointment(this.idappointment).subscribe(data => {
      this.appointment = data;
      console.log('data : ' + data);
      console.log('appointment date : ' + this.appointment.date);
      console.log('idpet : '+this.appointment.pet_idpetappoint);
      console.log('docreate : '+this.docreate);
      if(this.appointment.pet_idpetappoint != null){
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
      console.log('docreate : '+this.docreate);
    })
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
