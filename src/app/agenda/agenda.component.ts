import {Component, HostListener, ViewChild} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


import {
  EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService,
  AgendaService, ScheduleComponent, View,ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import {DatePipe, Location} from '@angular/common';
import {Appointment} from '../model/appointment';
import {AgendaResolver} from './agenda.resolver';
import {ActivatedRoute} from '@angular/router';

export interface User {
  selectedDate: Date;
}
export interface JSONUser {
  selectedDate: string;
}
export interface Planning {
  idappointment: number;
  reason: string;
  time: string;
}

declare let require: Function;
loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/fr/ca-gregorian.json'),
  require('cldr-data/main/fr/currencies.json'),
  require('cldr-data/main/fr/numbers.json'),
  require('cldr-data/main/fr/timeZoneNames.json')
);
L10n.load({
  "fr": {
    "schedule": {
      "day": "Jour",
      "week": "Semaine",
      "workWeek": "Jours ouverts",
      "month": "Mois",
      "agenda": "Agenda",
      "weekAgenda": "Agenda de la semaine",
      "workWeekAgenda": "Agenda des jours ouverts",
      "monthAgenda": "Agenda du mois",
      "today": "Aujourd'hui",
      "noEvents": "Pas d'évènements",
      "emptyContainer": "Pas de programme",
      "allDay": "Toute la journée",
      "start": "Début",
      "end": "Fin",
      "more": "Plus",
      "close": "Fermé",
      "cancel": "Annuler",
      "noTitle": "Pas de titre",
      "delete": "Supprimer",
      "deleteEvent": "Supprimer l'évènement",
      "deleteMultipleEvent": "Supprimer les évènements",
      "selectedItems": "Eléments sélectionnés",
      "deleteSeries": "Supprimer les séries",
      "edit": "Modifier",
      "editSeries": "Modifier les series",
      "editEvent": "Modifier l'évènement",
      "createEvent": "Ajouter un évènement",
      "subject": "Sujet",
      "addTitle": "Ajouter un titre",
      "moreDetails": "Plus de détails",
      "save": "Enregistrer",
      "editContent": "Modifier le contenu",
      "deleteRecurrenceContent": "Supprimer le contenu de la recurrence",
      "deleteContent": "Supprimer le contenu",
      "deleteMultipleContent": "Supprimer plusieurs contenus",
      "newEvent": "Nouvel évènement",
      "title": "Titre",
      "location": "Localisation",
      "description": "Description",
      "timezone": "Timezone",
      "startTimezone": "startTimezone",
      "endTimezone": "endTimezone",
      "repeat": "Répéter",
      "saveButton": "Enregistrer",
      "cancelButton": "Annuler",
      "deleteButton": "Supprimer",
      "recurrence": "Recurrence",
      "wrongPattern": "Mauvais format",
      "seriesChangeAlert": "Alerte modification de séries",
      "createError": "Erreur lors de la création",
      "recurrenceDateValidation": "Validation de la récurrence de la date",
      "sameDayAlert": "Alerte même jour",
      "editRecurrence": "Modifier une récurrence",
      "repeats": "Répétitions",
      "alert": "Alerte",
      "startEndError": "Erreur Début-Fin",
      "invalidDateError": "Date Invalide",
      "ok": "Ok",
      "occurrence": "Occurrence",
      "series": "Séries",
      "previous": "Précédent",
      "next": "Suivant",
      "timelineDay": "Chronologie quotidienne",
      "timelineWeek": "Chronologie hebdomadaire",
      "timelineWorkWeek": "Chronologie hebdomadaire (jours ouverts)",
      "timelineMonth": "Chronologie mensuelle"
    },
    "recurrenceeditor": {
      "none": "Vide",
      "daily": "quotidien",
      "weekly": "hebdomadaire",
      "monthly": "mensuel",
      "month": "moiq",
      "yearly": "annuel",
      "never": "jamais",
      "until": "jusqu'à",
      "count": "décompte",
      "first": "premier",
      "second": "second",
      "third": "troisième",
      "fourth": "quatrième",
      "last": "dernier",
      "repeat": "répéter",
      "repeatEvery": "répéter tous les",
      "on": "répéter",
      "end": "Fin",
      "onDay": "jour",
      "days": "jour(s)",
      "weeks": "semaine(s)",
      "months": "mois",
      "years": "année(s)",
      "every": "chaque",
      "summaryTimes": "temps",
      "summaryOn": "en",
      "summaryUntil": "jusqu'à",
      "summaryRepeat": "répétitions",
      "summaryDay": "jour(s)",
      "summaryWeek": "semaine(s)",
      "summaryMonth": "mois",
      "summaryYear": "année(s)"
    },
    "calendar": {
      "today": "Aujourd'hui"
    },
  }
});
@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,ResizeService, DragAndDropService, DatePipe],
  encapsulation: ViewEncapsulation.None
})
// @ts-ignore
export class AgendaComponent {
  public user: JSONUser;
  public JSONData: JSONUser = new class implements JSONUser {
    selectedDate: string;
  };
  public model_result: string = JSON.stringify(this.JSONData);

  public startWeek: number = 1;
  public today: Date = new Date();
  public isAppoint: boolean = false;
  public isWeekend: boolean = false;
  public appointOfDay: Planning[] = null;
  public appointments: Appointment[] = null;
  constructor(private location: Location,private activatedRoute: ActivatedRoute, private agendaResolver: AgendaResolver, private datePipe : DatePipe) {}

  ngOnInit() {
    console.log('location: '+ this.location.path())
    this.JSONData.selectedDate = this.today.toString();
    this.user = this.JSONData;
    this.activatedRoute.data.subscribe((data: { appointments: Appointment[] }) => {
      this.appointments = data.appointments;
    });
    if(this.today.getDay() === 0 || this.today.getDay() === 6 ){
      this.isWeekend = true;
    }else{
      this.getAppointmentsOfDay(this.today);
    }
  }
  /**
   * get the appointments of the day with time range
   * @param date
   */
  getAppointmentsOfDay(date: Date){
    var dateFormat = this.getDateFormat(date);
    this.appointOfDay = this.appointOfDay || [];
    //get appointments of the day
    for(let index = 0; index< this.appointments.length; index++) {
      var appointdate = this.getDateFormat(this.appointments[index].date);
      if(dateFormat == appointdate){
        this.appointOfDay.push({
          idappointment : this.appointments[index].idappointment,
          reason : this.appointments[index].reason,
          time : this.datePipe.transform(this.appointments[index].date, 'HH:mm')
        })
        }
      }
    //time range
    for(let ind = 0; ind<this.appointOfDay.length;ind++){
      if(this.appointOfDay[ind].time>this.appointOfDay[ind++].time){
        let buffer = this.appointOfDay[ind];
        this.appointOfDay[ind]=this.appointOfDay[ind++];
        this.appointOfDay[ind++]=buffer;
      }
      this.isAppoint = true;
    }
  }

  /**
   * get the good format of date dd-MM-yyyy
   * @param date
   */
  getDateFormat(date : Date){
    var dateString = new Date(date).toString();
    return this.datePipe.transform(dateString, 'dd-MM-yyyy');
  }

  /**
   * event changing the day
   * @param args
   */
  onChange(args) {
    console.log('date : '+ args.value);
    if(args.value!=null){
      this.appointOfDay = null;
      this.isAppoint = false;
      this.isWeekend = false;
      this.JSONData.selectedDate = args.value;
      this.model_result = JSON.stringify(this.JSONData);
      this.getAppointmentsOfDay(args.value);
    }
  }

  /**
   * enlever les we
   * @param args
   */
  disabledDate(args): void {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
      args.isDisabled = true;
    }
  }

}
