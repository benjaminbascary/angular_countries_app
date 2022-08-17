import { Component } from '@angular/core';
import { Country } from '../../interfaces/search-country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin: 0px 5px;
      }

      active {
        background-color: blue;
        color: white;
      }
    `
  ]
})
export class ByRegionComponent {

  constructor(private SearchCountryService: CountryService) { }

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion: string = '';
  error: boolean = false;
  countries: Country[] = [];
  errorMessage: string = '';

  getCSSClass(region: string): string {
    return region === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    this.activeRegion = region;
    // @TODO make service call
  }

  handleClick() {
    this.error = false; 
    this.SearchCountryService.searchCountryByRegion(this.activeRegion.toLowerCase())
      .subscribe(response => {
        this.countries = response;
      }, (error) => {
        this.error = true;
        this.errorMessage = `Can't find any countries right now!`;
        this.countries = [];
      })
  }
}
