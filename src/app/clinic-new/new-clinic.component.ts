import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewClinicService } from './new-clinic.service';
import { Clinic } from '../model/clinic';

@Component({
  selector: 'new-clinic',
  templateUrl: './new-clinic.component.html',
  providers: [ NewClinicService ]
})

export class NewClinicComponent implements OnInit {
  public nsiret: number = null;
  public clinicchoice:boolean = true;
  public message: string;
  public clinic: Clinic;

  constructor(private route: ActivatedRoute, private router: Router, private newClinicService: NewClinicService) {}

  ngOnInit(): void {
    this.clinic = new Clinic();
  }
  /**
   *
   * @param clinic
   */
  addClinic(clinic:Clinic){
    this.newClinicService.addClinic(clinic).subscribe(
      data => {
        this.setMessage(clinic.nsiret);
      },
      error => {
        console.log(error);
      });

  }
  /**
   *
   * @param nsiret
   */
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
