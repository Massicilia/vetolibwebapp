import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../model/appointment';
import { Pet } from '../model/pet';
import { HealthbookService } from '../healthbook/healthbook.service';

@Component({
  selector: 'healthbook-modification',
  templateUrl: './healthbook-modification.component.html',
  providers: [ HealthbookService ]
})
export class HealthbookModificationComponent implements OnInit {
  @Input() idpet: number;

  public appointment: Appointment = null;
  public pet: Pet = null;

  public message: string = null;
  public updateFailed: boolean = false;
  public displayForm: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private healthbookService: HealthbookService) {}

  ngOnInit(): void {
    if(this.idpet != null){
      this.setPetDetails();
    }
  }

  /**
   * pet details by id
   */
  setPetDetails() {
    this.healthbookService.getPet(this.idpet).subscribe(data => {
      this.pet = data;
      if (this.pet != null){
        this.displayForm = true;
      }
    });
  }
  /**
   *
   * @param pet
   */
  updatePet(pet: Pet): void {
      this.healthbookService.updatePet(pet).subscribe(
        () => {
          this.setMessage();
        },
        error => {
          if(error != null){
            this.updateFailed = true;
          }
        });
  }

  /**
   * Message after submitting the form
   */
  setMessage() {
    this.message = this.healthbookService.isSuccessed ?
      'Le carnet de santé a été modifié' : 'La modification a échoué';
  }

}
