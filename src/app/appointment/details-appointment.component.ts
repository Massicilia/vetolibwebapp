import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Appointment } from '../model/appointment';
import { Petowner } from '../model/petowner';

@Component({
  selector: 'details-appointment',
  templateUrl: './details-appointment.component.html',
  providers:[ DatePipe ]
})
export class DetailsAppointmentComponent implements OnInit {
  public appointment: Appointment = null;
  public petowner: Petowner = null;
  public date:String = null;
  public idpetowner:Number = null;
  public idpet:Number = null;

  constructor(private route: ActivatedRoute, private router: Router, private datePipe : DatePipe) {  }

  ngOnInit(): void {
    this.getAppointmentDetails();
    if(this.appointment != null){
      this.date = this.getDateFormat();
      this.idpetowner = this.appointment.petowner_idpetownerappoint;
      this.idpet = this.appointment.pet_idpetappoint;
    }
  }

  /**
   * call resolver for appointment details
   */
  getAppointmentDetails(): void{
    this.route.data.subscribe((data: { appointment: Appointment }) => {
      this.appointment = data.appointment;
    });
  }
  /**
   * date format dd-MM-yyyy HH:mm
   * by datePipe
   */
  getDateFormat(){
    var dateString = new Date(this.appointment.date).toString();
    return this.datePipe.transform(dateString, 'dd-MM-yyyy HH:mm');
  }
  /**
   * return to agenda page
   * by router
   */
  goBack(): void {
    this.router.navigate(['/agenda']);
  }
}
