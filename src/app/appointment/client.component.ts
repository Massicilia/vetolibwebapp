import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppointmentService} from './appointment.service';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  providers: [AppointmentService]
})
export class ClientComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private agendaService: AppointmentService) {}

  ngOnInit(): void {
    let idclient = +this.route.snapshot.paramMap.get('idclient');
  }

  goBack(): void {
    this.router.navigate(['/rendez-vous/id']);
    //window.history.back();
  }

}
