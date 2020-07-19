/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vetolibwebapp';
  name = 'Angular';
}
*/
import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Appointment} from './appointment';
import {APPOINTMENTS} from './mock-appointments';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html'
})
export class ListAppointmentComponent implements  OnInit {
  public appointments: Appointment[] = null;
  public title: string = 'Agenda';

  constructor(private router: Router) {  }

  ngOnInit(): void {
    this.appointments = APPOINTMENTS;
  }

  selectAppointment(appointment: Appointment){
    let link = ['/agenda', appointment.idappointment];
    this.router.navigate(link);
  }
}
