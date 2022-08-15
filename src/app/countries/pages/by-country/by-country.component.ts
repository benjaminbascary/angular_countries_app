import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  constructor() {}

  searchTerm: string = '';
  
  handleSubmit() {
    console.log(this.searchTerm)
  }

}
