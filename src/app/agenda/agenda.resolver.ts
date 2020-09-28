import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { AgendaDisplayService } from "./agenda.service";
import { Appointment} from "../model/appointment";
@Injectable({
  providedIn: "root"
})
export class AgendaResolver implements Resolve<Appointment[]> {
  constructor(private router : Router,
              private agendaService: AgendaDisplayService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot){
    return this.agendaService.getAgenda()
      .pipe();
  };
}
