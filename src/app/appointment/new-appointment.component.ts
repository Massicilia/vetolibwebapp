import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'appointment',
  templateUrl: './new-appointment.component.html',
  providers:[AppointmentService]
})

export class NewAppointmentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private agendaService: AppointmentService) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/appointment']);
    //window.history.back();
  }

}
