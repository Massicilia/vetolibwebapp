import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'billinginvoices',
  templateUrl: './billinginvoices.component.html'
})
export class BillinginvoicesComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/appointment']);
    //window.history.back();
  }

}
