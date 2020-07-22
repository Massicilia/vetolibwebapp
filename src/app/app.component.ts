/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vetolibwebapp';
  name = 'Angular';
}
*/
import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

import {Appointment} from './appointment/appointment';
import {APPOINTMENTS} from './appointment/mock-appointments';

@Component({
  selector: 'app-vetolib',
  templateUrl: './app.component.html'
})
export class AppComponent {}
