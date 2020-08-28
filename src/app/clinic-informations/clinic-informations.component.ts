import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {ClinicInformationsService} from './clinic-informations.service';
import {Clinic} from '../model/clinic';

@Component({
  selector: 'clinic-informations',
  templateUrl: './clinic-informations.component.html'
})
export class ClinicInformationsComponent implements OnInit {
  @Input() nsiret: number;
  public clinic: Clinic;
  public message:string = null;
  public updateFailed:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private clinicInformationsService: ClinicInformationsService) {}

  ngOnInit(): void {
    this.getClinicDetails();
  }
  getClinicDetails(): void{
    this.clinicInformationsService.getClinic(this.nsiret).subscribe(
      data => {
        this.clinic = data;
        this.clinic.phonenum = '0'+this.clinic.phonenum;
        console.log('data : ' + data);
        console.log('name : ' + this.clinic.name);
        console.log('nsiret : ' + this.clinic.nsiret);
        console.log('adress : ' + this.clinic.adress);
      },
      err => {
        console.log('error status : '+ err.status);
        console.log("couldn't get data, maybe show error to user "+ err.status); }
    )
  }

  updateClinic(clinic:Clinic): void {
    console.log('nsiret : '+ clinic.nsiret);
    console.log('name : '+ clinic.name);
    console.log('adress : '+ clinic.adress);
    console.log('email : '+ clinic.email);
    console.log('phonenum : '+ clinic.phonenum);
    this.clinicInformationsService.updateClinic(clinic).subscribe(
      data => {
        console.log('updated : '+ data);
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
    this.message = this.clinicInformationsService.isSuccessed ?
      'Les informations ont été modifiées' : 'La modification a échoué';
  }
}
