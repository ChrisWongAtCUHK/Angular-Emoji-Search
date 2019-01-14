import { Component } from '@angular/core';
import filterEmoji from './filterEmoji';

const fe =  filterEmoji("", 20);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emoji = fe[0];
}
