import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {Pet} from '../model/pet';
import {VeterinaryInformationsService} from './veterinary-informations.service';
import {Veterinary} from '../model/veterinary';

@Component({
  selector: 'veterinary-informations',
  templateUrl: './veterinary-informations.component.html'
})
export class VeterinaryInformationsComponent implements OnInit {
  public veterinary:Veterinary;
  public updateFailed:boolean = false;
  public message:string = null;
  public isPsswdMissing:boolean = false;
  public nsiret:number;

  constructor(private route: ActivatedRoute, private router: Router, private veterinaryInformationsService: VeterinaryInformationsService) {}

  ngOnInit(): void {
    console.log('localStorage.getItem(token) : '+ localStorage.getItem('token'));
    this.getVeterinaryDetails();
  }
  getVeterinaryDetails(): void{
    this.route.data.subscribe(
    (data: { veterinary: Veterinary }) => {
            this.veterinary = data.veterinary;
            this.veterinary.phonenum = '0'+this.veterinary.phonenum;
            this.nsiret = this.veterinary.clinic_nsiret;
            console.log('nordinal : '+ this.veterinary.nordinal)
            console.log('nsiret : '+ this.veterinary.clinic_nsiret)
          },
    err => {
      console.log('error status : ' + err.status);
    });
  }

  updateVeterinary(veterinary:Veterinary): void {
    console.log('nordinal : '+ veterinary.nordinal);
    console.log('surname : '+ veterinary.surname);
    console.log('name : '+ veterinary.name);
    console.log('adress : '+ veterinary.adress);
    console.log('email : '+ veterinary.email);
    console.log('phonenum : '+ veterinary.phonenum);
    console.log('password : '+ veterinary.password);
    console.log('nordinal : '+ veterinary.nordinal);
    this.veterinaryInformationsService.updateVeterinary(veterinary).subscribe(
      data => {
        this.isPsswdMissing = false;
        this.isPsswdMissing = this.veterinaryInformationsService.isPsswdMissing == 'missing parameters';
        console.log('updated : '+ data.name);
        if(this.isPsswdMissing){
          console.log('if ispsswdmissing');
          this.message = 'Confirmez votre mot de passe';
        }else {
          this.setMessage();
        }
      },
      error => {
        console.log(error.message);
        if(error != null){
          this.updateFailed = true;
        }
      });
  }

  setMessage() {
    this.message = this.veterinaryInformationsService.isSuccessed ?
      'Les informations ont été modifiées' : 'La modification a échoué';
  }
}
