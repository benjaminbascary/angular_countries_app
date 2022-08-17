import { Component } from '@angular/core';
//Services
import { CountryService } from '../../services/country.service';
//Interfaces
import { Country } from '../../interfaces/search-country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
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
  suggestions: Country[] = [];
  showSuggestions: boolean = false;

  // This term comes from /
  handleSubmit(term: string) {
    this.error = false; 
    this.SearchCountryService.searchCountry(term)
      .subscribe(response => {
        this.countries = response;
      }, (error) => {
        this.error = true;
        this.errorMessage = `Can't find any country matching ${term}`;
        this.countries = [];
      })
  }

  getSuggestions(term: string) {
    this.showSuggestions = true;
    this.suggestions = [];
    this.searchTerm = term;
    this.error = false;
    this.SearchCountryService.searchCountry(term)
      .subscribe(countries => {
        this.suggestions = countries.splice(0, 5)
      }, (error) => {
        this.suggestions = [];
      })
  }

  handleSuggestionSearch() {
    this.handleSubmit(this.searchTerm);
    this.showSuggestions = false;
  }
}
