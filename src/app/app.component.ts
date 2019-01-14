import { Component, OnInit } from '@angular/core';
import { Emoji } from './emoji';
import filterEmoji from './filterEmoji';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  emojiData: Emoji[];
  constructor() { }

  handleSearchChange(event) {
    this.emojiData = filterEmoji(event.target.value, 20);
  };

  ngOnInit() {
    this.emojiData = filterEmoji("", 20);
  }
}
