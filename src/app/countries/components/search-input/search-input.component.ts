import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  searchTerm: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  search() {
    this.onEnter.emit(this.searchTerm);
  }
}
