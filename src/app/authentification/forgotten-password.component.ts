import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'forgotten-password',
  templateUrl: './forgotten-password.component.html'
})
export class ForgottenPasswordComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/login']);
    //window.history.back();
  }

}
