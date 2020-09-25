import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinaryInformationsService } from './veterinary-informations.service';
import { Veterinary } from '../model/veterinary';

@Component({
  selector: 'veterinary-informations',
  templateUrl: './veterinary-informations.component.html'
})
export class VeterinaryInformationsComponent implements OnInit {
  public veterinary: Veterinary;
  public updateFailed: boolean = false;
  public isPsswdMissing: boolean = false;
  public message: string = null;
  public nsiret: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private veterinaryInformationsService: VeterinaryInformationsService) {}

  ngOnInit(): void {
    this.getVeterinaryDetails();
  }

  /**
   * get veterinary by id
   */
  getVeterinaryDetails(): void{
    this.route.data.subscribe(
    (data: { veterinary: Veterinary }) => {
            this.veterinary = data.veterinary;
            this.veterinary.phonenum = '0'+this.veterinary.phonenum;
            this.nsiret = this.veterinary.clinic_nsiret;
          },
    err => {
      console.log('error status : ' + err.status);
    });
  }
  /**
   * update veterinary informations
   * @param veterinary
   */
  updateVeterinary(veterinary:Veterinary): void {
    this.veterinaryInformationsService.updateVeterinary(veterinary).subscribe(
      data => {
        this.isPsswdMissing = false;
        this.isPsswdMissing = this.veterinaryInformationsService.isPsswdMissing == 'missing parameters';
        if(this.isPsswdMissing){
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
  /**
   * error message
   */
  setMessage() {
    this.message = this.veterinaryInformationsService.isSuccessed ?
      'Les informations ont été modifiées' : 'La modification a échoué';
  }
}
