import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/search-country.interface';
import { Error404Interface } from '../../interfaces/Error404.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      .hidden {
        display: hidden;
      }
      img {
        max-height: 2.5vh;
      }
    `
  ]
})
export class ByCountryComponent {

  constructor(private SearchCountryService: CountryService) {}

  error: boolean = false;
  errorMessage: string = ''
  searchTerm: string = '';
  countries: Country[] = [];
 
  handleSubmit() {
    this.error = false; 
    this.SearchCountryService.searchCountry(this.searchTerm)
      .subscribe(response => {
        this.countries = response;
      }, (error) => {
        this.error = true;
        this.errorMessage = `Can't find any country matching ${this.searchTerm}`;
        this.countries = [];
      })
  }

}
