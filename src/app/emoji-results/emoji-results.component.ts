import { Component, OnInit, Input } from '@angular/core';
import { Emoji } from '../emoji';

@Component({
  selector: 'emoji-results',
  templateUrl: './emoji-results.component.html',
  styleUrls: ['./emoji-results.component.css']
})
export class EmojiResultsComponent implements OnInit {
  @Input() emojiData: Emoji[];

  constructor() { }

  ngOnInit() {
  }

}
