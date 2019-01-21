import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Output() searchTextOutput = new EventEmitter<string>();
  constructor() { }

  handleChange(value: string) {
    this.searchTextOutput.emit(value);
  }

  ngOnInit() {
  }
}
