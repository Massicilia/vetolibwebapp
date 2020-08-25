import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { Petowner } from '../model/petowner';

@Component({
  selector: 'petownerdetails',
  templateUrl: './petowner.component.html',
  providers: []
})
export class PetownerComponent implements OnInit {
  public petowner: Petowner = null;
  @Input() idpetowner: number;
  constructor(private route: ActivatedRoute, private router: Router, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    console.log('etape');
    console.log('petowner component idpetowner : ' + this.idpetowner);
    if(this.idpetowner != null){
      console.log('idpetowner is not null');
      this.getPetownerDetails();
    }
  }
  getPetownerDetails() {
    console.log('etape 1 ');
    this.appointmentService.getPetowner(this.idpetowner).subscribe(data => {
      console.log('etape 2 ');
      this.petowner = data;
      console.log('name : ' + data.name);
      console.log('name : ' + this.petowner.name);
    });
  }

}
