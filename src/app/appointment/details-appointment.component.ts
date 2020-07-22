import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Appointment } from './appointment';
import { APPOINTMENTS } from './mock-appointments';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'details-appointment',
  templateUrl: './details-appointment.component.html',
  providers:[AppointmentService]
})
export class DetailsAppointmentComponent implements OnInit {

  appointments: Appointment[] = null;
  appointment: Appointment = null;

  constructor(private route: ActivatedRoute, private router: Router, private agendaService: AppointmentService) {}

  ngOnInit(): void {
    this.appointments = this.agendaService.getAppointments();

    let id = +this.route.snapshot.paramMap.get('id');
    this.appointment = this.agendaService.getAppointment(id);

  }

  goBack(): void {
    this.router.navigate(['/appointment']);
    //window.history.back();
  }

}
