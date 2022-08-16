import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/search-country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  constructor(private SearchCountryService: CountryService) {}

  error: boolean = false;
  errorMessage: string = ''
  searchTerm: string = '';
  countries: Country[] = [];
 
  // This term comes from /
  handleSubmit(term: string) {
    this.error = false; 
    this.SearchCountryService.searchCountryByRegion(term)
      .subscribe(response => {
        this.countries = response;
      }, (error) => {
        this.error = true;
        this.errorMessage = `Can't find any country matching ${term}`;
        this.countries = [];
      })
  }

  suggestions(searchTerm?: string) {
    this.error = false
    /** 
      @TODO crear suggestions!
    */
  }

}
