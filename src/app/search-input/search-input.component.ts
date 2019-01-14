import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Input() textChange: Function
  constructor() { }

  handleChange(event) {
    this.textChange(event);
  }
  ngOnInit() {
  }

}
