import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../model/pet';
import { NewHealthbookService } from './new-healthbook.service';

@Component({
  selector: 'pet-creation',
  templateUrl: './new-healthbook.component.html',
  providers: [ NewHealthbookService ]
})
// @ts-ignore
export class NewHealthbookComponent implements OnInit {
  public pet: Pet;
  public petowner: number;
  public message: string = null;
  constructor(private route: ActivatedRoute, private router: Router, private newhealthbookService: NewHealthbookService) {}

  ngOnInit(): void {
    this.pet = new Pet();
    this.petowner = +this.route.snapshot.paramMap.get('idpetowner');
  }

  addPet(pet:Pet): void {
      this.pet.petowner_idpetowner = this.petowner;
      this.newhealthbookService.addPet(pet).subscribe(
        data => {
          this.setMessage();
        },
        error => {
          console.log(error.message);
        });
  }
  setMessage() {
    this.message = this.newhealthbookService.isSuccessed ?
      'Le carnet de santé a été créé' : 'La création du carnet de santé a échoué';
  }

}
