import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'pet',
  templateUrl: './pet.component.html',
  providers: [AppointmentService]
})
export class PetComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private agendaService: AppointmentService) {}

  ngOnInit(): void {
    let idanimal = +this.route.snapshot.paramMap.get('idanimal');
  }

  goBack(): void {
    this.router.navigate(['/appointment/:id']);
    //window.history.back();
  }

}
