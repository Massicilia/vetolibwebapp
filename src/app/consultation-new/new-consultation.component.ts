import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewConsultationService } from './new-consultation.service';
import { HealthbookService } from '../healthbook/healthbook.service';
import { Consultation } from '../model/consultation';

@Component({
  selector: 'new-consultation',
  templateUrl: './new-consultation.component.html',
  providers: [ NewConsultationService, HealthbookService ]
})

export class NewConsultationComponent implements OnInit {
  @Input() idpet: number;
  public message: string;
  public race: string;
  public consultation: Consultation;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private newConsultationService: NewConsultationService,
              private healthbookService: HealthbookService) {
  }

  ngOnInit(): void {
    this.getPetRace();
    this.consultation = new Consultation();
  }

  /**
   *
   * @param consultation
   */
  addConsultation(consultation:Consultation){
    consultation.idveterinary = parseInt(localStorage.getItem('nordinal'));
    consultation.idpet = this.idpet;
    if(this.race != "") consultation.race = this.race;
    this.newConsultationService.addConsultation(consultation).subscribe(
      data => {
        this.setMessage();
      },
      error => {
        console.log(error);
      });

  }
  /**
   *
   */
  getPetRace(){
    this.healthbookService.getPet(this.idpet).subscribe(data => {
      this.race = data.race;
    })
  }
  /**
   *
   */
  setMessage() {
      if(this.newConsultationService.isSuccessed ){
        this.message = 'Informations enregistrées';
      }else {
        this.message =  'Impossible d\'ajouter ces information';
      }
  }
}
