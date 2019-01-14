import { Component, OnInit, Input } from '@angular/core';
import { Emoji } from '../emoji';

@Component({
  selector: 'emoji-results-row',
  templateUrl: './emoji-results-row.component.html',
  styleUrls: ['./emoji-results-row.component.css']
})
export class EmojiResultsRowComponent implements OnInit {

  @Input() emoji: Emoji;

  constructor() { }

  ngOnInit() {
  }

}
