import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'invoices',
  templateUrl: './invoices.component.html'
})
export class InvoicesComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/facturation']);
    //window.history.back();
  }

}
