import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/login']);
    //window.history.back();
  }

}
