import {Component, HostListener, ViewChild} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


import {
  EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService,
  AgendaService, ScheduleComponent, View,ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import { L10n, loadCldr } from '@syncfusion/ej2-base';

export interface User {
  selectedDate: Date;
}
export interface JSONUser {
  selectedDate: string;
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
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,ResizeService, DragAndDropService],
  encapsulation: ViewEncapsulation.None
})
// @ts-ignore
export class AgendaComponent {
  public user: JSONUser;
  public JSONData: JSONUser = JSON.parse('{ "selectedDate":"2020-09-31T00:00:00+00:00"}');
  public model_result: string = JSON.stringify(this.JSONData);

  public dateValue: Date = new Date();
  public startWeek: number = 1;
  constructor() {
  }
  public ngOnInit() {
    this.user = this.JSONData;
  }
  onChange(args) {
    this.JSONData.selectedDate = args.value;
    this.model_result = JSON.stringify(this.JSONData);
  }

  // enlever les we
  disabledDate(args): void {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
      args.isDisabled = true;
    }
  }

}
