import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html'
})

export class AppointmentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/agenda']);
    //window.history.back();
  }

}
