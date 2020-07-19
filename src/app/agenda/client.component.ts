import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let idclient = +this.route.snapshot.paramMap.get('idclient');
  }

  goBack(): void {
    this.router.navigate(['/agenda/:id']);
    //window.history.back();
  }

}
