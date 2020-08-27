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

  constructor(private route: ActivatedRoute, private router: Router, private veterinaryInformationsService: VeterinaryInformationsService) {}

  ngOnInit(): void {
    console.log('localStorage.getItem(token) : '+ localStorage.getItem('token'));
  }
  getVeterinaryDetails(): void{
    this.route.data.subscribe(
    (data: { veterinary: Veterinary }) => {
            this.veterinary = data.veterinary;
          },
    err => {
      console.log('error status : ' + err.status);
    });
  }

}
