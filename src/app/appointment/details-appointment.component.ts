import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../model/appointment';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'details-appointment',
  templateUrl: './details-appointment.component.html',
  providers:[AppointmentService]
})
export class DetailsAppointmentComponent implements OnInit {
  idappointment: number;
  appointment: Appointment = null;

  constructor(private route: ActivatedRoute, private router: Router, private agendaService: AppointmentService) {
    this.idappointment = this.route.snapshot.params.id;
    console.log('idappointment : ' +this.idappointment);
  }
  ngOnInit(): void {
    this.getAppointmentDetails();
  }
  getAppointmentDetails(): void{
    this.agendaService.getAppointment(this.idappointment)
      .subscribe((data: Appointment) =>
        this.appointment = data
    )
  }

  goBack(): void {
    this.router.navigate(['/agenda']);
  }

}
