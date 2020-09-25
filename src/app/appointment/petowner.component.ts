import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { Petowner } from '../model/petowner';

@Component({
  selector: 'petownerdetails',
  templateUrl: './petowner.component.html'
})
export class PetownerComponent implements OnInit {
  @Input() idpetowner: number;
  public petowner: Petowner = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    if(this.idpetowner != null){
      this.getPetownerDetails();
    }
  }

  /**
   * Petowner information by id
   */
  getPetownerDetails() {
    this.appointmentService.getPetowner(this.idpetowner).subscribe(data => {
      this.petowner = data;
    });
  }
}
