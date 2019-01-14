import { Component, OnInit, Input } from '@angular/core';
import { Emoji } from '../emoji';

@Component({
  selector: 'emoji-result-row',
  templateUrl: './emoji-result-row.component.html',
  styleUrls: ['./emoji-result-row.component.css']
})
export class EmojiResultRowComponent implements OnInit {
  @Input() emoji: Emoji;

  constructor() { }

  ngOnInit() {
    // please be aware the encoding of emojiList.json
    const codePointHex = this.emoji.symbol.codePointAt(0).toString(16);
    this.emoji.src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  }

}
