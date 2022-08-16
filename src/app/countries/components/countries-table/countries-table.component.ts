import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/search-country.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styles: [
    `
      img {
        max-height: 2.5vh;
      }
    `
  ]
})
export class CountriesTableComponent {

  @Input() countries: Country[] = []; 

}
