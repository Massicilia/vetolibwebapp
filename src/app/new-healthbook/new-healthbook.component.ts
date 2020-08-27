import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {Pet} from '../model/pet';
import {NewHealthbookService} from './new-healthbook.service';

@Component({
  selector: 'pet-creation',
  templateUrl: './new-healthbook.component.html',
  providers: [NewHealthbookService]
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
    console.log('petowner : '+ this.petowner);
  }

  addPet(pet:Pet): void {
      this.pet.petowner_idpetowner = this.petowner;
      console.log('pet.petowner_idpetowner : '+ this.pet.petowner_idpetowner);
      console.log('pet.name : '+ this.pet.name);
      console.log('pet.age : '+ this.pet.age);
      console.log('pet.race : '+ this.pet.race);
      console.log('pet.sex : '+ this.pet.sex);
      console.log('pet.weight : '+ this.pet.weight);
      console.log('pet.color : '+ this.pet.color);
      console.log('pet.tatooID : '+ this.pet.tatooID);
      console.log('pet.chipID : '+ this.pet.chipID);
      console.log('pet.sterilized : '+ this.pet.sterilized);
      console.log('pet.assurance : '+ this.pet.assurance);
      console.log('pet.nassurance : '+ this.pet.nassurance);
      this.newhealthbookService.addPet(pet).subscribe(
        data => {
          console.log('added '+ data);
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
