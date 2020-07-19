import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Appointment } from './appointment';
import { APPOINTMENTS } from './mock-appointments';

@Component({
  selector: 'details-appointment',
  templateUrl: './details-appointment.component.html'
})
export class DetailsAppointmentComponent implements OnInit {

  appointments: Appointment[] = null;
  appointment: Appointment = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.appointments = APPOINTMENTS;

    let id = +this.route.snapshot.paramMap.get('id');
    for (let i = 0; i < this.appointments.length; i++) {
      if (this.appointments[i].idappointment == id) {
        this.appointment = this.appointments[i];
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/agenda']);
    //window.history.back();
  }

}
