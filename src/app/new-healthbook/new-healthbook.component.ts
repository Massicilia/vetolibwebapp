import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {Pet} from '../model/pet';
import {NewHealthbookService} from './new-healthbook.service';

@Component({
  selector: 'pet',
  templateUrl: './new-healthbook.component.html',
  providers: [NewHealthbookService]
})
export class NewHealthbookComponent implements OnInit {
  public pet: Pet = null;
  public message: string = null;
  constructor(private route: ActivatedRoute, private router: Router, private newhealthbookService: NewHealthbookService) {}

  ngOnInit(): void { }

  addPet(pet:Pet): void {
      pet.petowner_idpetowner = this.route.params['idpetowner'];
      console.log('idpetowner: '+ pet.petowner_idpetowner);
      this.newhealthbookService.addPet(pet).subscribe(
        data => {
          this.pet = data.pet;
          console.log('added '+ this.pet.name);
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
