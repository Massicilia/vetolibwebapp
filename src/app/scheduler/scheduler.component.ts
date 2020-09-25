import {Component} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import {loadCldr, L10n, setCulture} from '@syncfusion/ej2-base';
import {Appointment} from '../model/appointment';
import {ActivatedRoute} from '@angular/router';
import { DateTimePickerComponent} from '@syncfusion/ej2-angular-calendars';
import {AgendaResolver} from '../agenda/agenda.resolver';
import {
  AgendaService,
  DayService,
  DragAndDropService,
  MonthService,
  ResizeService,
  WeekService,
  WorkWeekService
} from '@syncfusion/ej2-angular-schedule';
export interface JSONUser {
  selectedDate: string;
}
setCulture('fr');
declare let require: Function;
@Component({
  selector: 'appointment-scheduler',
  templateUrl: './scheduler.component.html',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,ResizeService, DragAndDropService, DatePipe],
  encapsulation: ViewEncapsulation.None
})
// @ts-ignore
export class SchedulerComponent {

  public user: JSONUser;
  public JSONData: JSONUser = new class implements JSONUser {
    selectedDate: string;
  };
  public model_result: string = JSON.stringify(this.JSONData);

  //////////////////////////////////////
  public startWeek: number = 1;
  public today: Date = new Date();
  public exportDate: Date = null;

  ///////////////////////////////////////
  public date: Date = null;
  public minDate: Date = new Date(this.today.getFullYear(),this.today.getMonth(), this.today.getDay(), 8, 0, 0);

  public schedulermessage: string = null;
  public appointmentDates: Date[] = null;
  public appointments: Appointment[];

  constructor(private activatedRoute: ActivatedRoute, private datePipe : DatePipe) {
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
  }
  ngOnInit() {
    this.JSONData.selectedDate = this.minDate.toString();
    this.exportDate = this.minDate;
    this.user = this.JSONData;
    this.activatedRoute.data.subscribe((data: { appointments: Appointment[] }) => {
      this.appointments = data.appointments;
      this.appointmentDates = this.appointmentDates || [];
      for(let index=0; index<this.appointments.length; index++){
        this.appointmentDates.push(this.appointments[index].date)
      }
    });
  }
  onChange(args) {
    this.JSONData.selectedDate = args.value;
    this.exportDate = args.value;
    this.model_result = JSON.stringify(this.JSONData);
    if(args.value != null){
      if(this.appointmentDates != null){
        let dateformat = this.datePipe.transform(args.value, 'yyyy-MM-dd HH:mm:ss');
        for(let index=0; index<this.appointmentDates.length; index++){
          let appointmentdateformat = this.datePipe.transform(this.appointmentDates[index], 'yyyy-MM-dd HH:mm:ss');;
          if(dateformat == appointmentdateformat){
            args.isDisabled = true;
            this.schedulermessage = 'Date indisponible';
          }
        }
      }
      if(args.value.getHours()<8 || args.value.getHours()>19) {
        args.isDisabled = true;
        this.schedulermessage = 'Date indisponible';
        this.date = null;
      }
    }
    console.log('this.exportDate : '+ this.exportDate);
    console.log('date : '+ this.user.selectedDate);
  }
  onRenderCell(args) {
    if (args.date.getDay() == 0 || args.date.getDay() == 6 || args.date.getHours() == 7 ) {
      args.isDisabled = true;
    }
  }
}
