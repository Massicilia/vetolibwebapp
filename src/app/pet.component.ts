import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'pet',
  templateUrl: './pet.component.html'
})
export class PetComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let idanimal = +this.route.snapshot.paramMap.get('idanimal');
  }

  goBack(): void {
    this.router.navigate(['/agenda/:id']);
    //window.history.back();
  }

}
