import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../appointment/appointment.service';
import { Appointment } from '../model/appointment';
import { Pet } from '../model/pet';
import { HealthbookService } from './healthbook.service';

@Component({
  selector: 'healthbook',
  templateUrl: './healthbook.component.html',
  providers: [ AppointmentService ]
})
export class HealthbookComponent implements OnInit {
  public appointment: Appointment = null;
  public pet: Pet = null;

  public idappointment: number;
  public idpetowner: number;

  public message: string = null;
  public docreate: boolean = false;
  public exists: boolean = false;
  public idpet: number;

  constructor(private route: ActivatedRoute, private router: Router, private healthbookService: HealthbookService, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.idappointment = +this.route.snapshot.paramMap.get('idappointment');
    this.idpetowner = +this.route.snapshot.paramMap.get('idpetowner');
    this.selectHealthbookForm();
  }

  /**
   * based on existing pet healthbook
   * or create one
   */
  selectHealthbookForm(){
    this.appointmentService.getAppointment(this.idappointment).subscribe(data => {
      this.appointment = data;
      if(this.appointment.pet_idpetappoint == null){
        this.docreate = true;
      }else {
        this.exists = true;
        this.idpet = this.appointment.pet_idpetappoint;
      }
    })
  }
}
