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
  txt: String;
  constructor() { }

  handleSearchChange(value: String) {
    this.emojiData = filterEmoji(value, 20);
  };

  ngOnInit() {
    this.emojiData = filterEmoji("", 20);
  }

  changeTxt(value: String) {
    this.txt = value;
  };
}
