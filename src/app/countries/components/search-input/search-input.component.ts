import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {


  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(380)
      )
      .subscribe( searchterm => {
       this.onDebounce.emit(searchterm);
    })
  }

  
  

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  searchTerm: string = '';

  onKeyDown(eventValue: string) {
    console.log(eventValue);
    this.debouncer.next(this.searchTerm);
  }

  search() {
    this.onEnter.emit(this.searchTerm);
  }
}
