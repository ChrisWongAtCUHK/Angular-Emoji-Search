import { Component, OnInit, Input } from '@angular/core';
import { Emoji } from '../emoji';
import Clipboard from 'clipboard';

@Component({
  selector: 'emoji-results',
  templateUrl: './emoji-results.component.html',
  styleUrls: ['./emoji-results.component.css']
})
export class EmojiResultsComponent implements OnInit {
  _emojiData: Emoji[];
  @Input()
  set emojiData(value: Emoji[]){
    this._emojiData = value;
  }

  clipboard: ClipboardEvent;

  constructor() { }

  ngOnInit() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }
}
