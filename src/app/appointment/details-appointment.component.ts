import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../model/appointment';
import {DatePipe} from '@angular/common';
import {Petowner} from '../model/petowner';

@Component({
  selector: 'details-appointment',
  templateUrl: './details-appointment.component.html',
  providers:[DatePipe]
})
export class DetailsAppointmentComponent implements OnInit {
  appointment: Appointment = null;
  petowner: Petowner = null;
  date:String = null;
  idpetowner:Number = null;

  constructor(private route: ActivatedRoute, private router: Router, private datePipe : DatePipe) {  }
  ngOnInit(): void {
    this.getAppointmentDetails();
    if(this.appointment != null){
      this.date = this.getDateFormat();
      this.idpetowner = this.appointment.petowner_idpetownerappoint;
    }
  }
  getAppointmentDetails(): void{
    this.route.data.subscribe((data: { appointment: Appointment }) => {
      this.appointment = data.appointment;
    });
  }
  getDateFormat(){
    var dateString = new Date(this.appointment.date).toString();
    return this.datePipe.transform(dateString, 'dd-MM-yyyy HH:mm');
  }

  goBack(): void {
    this.router.navigate(['/agenda']);
  }

}
