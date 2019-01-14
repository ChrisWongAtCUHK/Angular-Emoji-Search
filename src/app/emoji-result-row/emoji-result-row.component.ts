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
    const codePointHex = this.emoji.symbol.codePointAt(0).toString(16);
    console.log(this.emoji.symbol);
    console.log(this.emoji.symbol.codePointAt(0));
    console.log(codePointHex);
    this.emoji.src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  }

}
