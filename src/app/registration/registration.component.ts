import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Veterinary } from '../model/veterinary';
import {RegistrationService} from './registration.service';
import {NewClinicService} from '../new-clinic/new-clinic.service';
import {NewClinicComponent} from '../new-clinic/new-clinic.component';
import {ClinicSelectionComponent} from '../clinic-selection/clinic-selection.component';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  @ViewChild(NewClinicComponent) newClinicComponent: NewClinicComponent;
  @ViewChild(ClinicSelectionComponent) clinicSelectionComponent: ClinicSelectionComponent;
  public message:string = null;
  public veterinary:Veterinary;
  public clinicchoice: boolean = true;
  public success: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private registrationService: RegistrationService, private newClinicService: NewClinicService) {}

  ngOnInit(): void {
    this.veterinary = new Veterinary();
  }
  addVeterinary(veterinary:Veterinary){
    let nsiret = null;
    if(this.clinicchoice){
      console.log('clinicchoice');
      console.log('clinicchoice nsiret' + this.clinicSelectionComponent.nsiret);
      nsiret = this.clinicSelectionComponent.nsiret;
    }else{
      console.log('!clinicchoice');
      nsiret = this.newClinicComponent.nsiret;
    }
    veterinary.clinic_nsiret = nsiret;
    console.log('nsiret : '+ nsiret);
    console.log('name : '+ veterinary.name);
    console.log('surname : '+ veterinary.surname);
    console.log('username : '+ veterinary.username);
    console.log('nordinal : '+ veterinary.nordinal);
    console.log('email : '+ veterinary.email);
    console.log('adress : '+ veterinary.adress);
    console.log('tel : '+ veterinary.phonenum);
    if(veterinary.clinic_nsiret != null){
      this.registrationService.addVeterinary(veterinary).subscribe(
        data => {
          console.log('added '+ data);
          this.setMessage();
        },
        error => {
          console.log(error.message);
        });
    }else {
      this.message = 'Il est nécessaire d\'ajouter votre clinique';
    }

  }

  setMessage() {
    if(this.registrationService.isDuplicated){
      this.message = ' Un compte avec ces informations existe déjà'
    } else {
      if(this.registrationService.isSuccessed ){
        this.message = 'Votre demande d\'inscription est enregistrée. Vous recevrez un email lorsqu\'elle sera validée';
        this.success = true;
         setTimeout(()=>{
          this.router.navigate(['/login']);
        }, 3000);
      }else {
        this.message =  'Votre demande d\'inscription a échoué';
      }
    }
  }

}
