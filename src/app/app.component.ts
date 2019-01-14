import { Component } from '@angular/core';
import filterEmoji from './filterEmoji';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emojiData = filterEmoji("", 20);
}
