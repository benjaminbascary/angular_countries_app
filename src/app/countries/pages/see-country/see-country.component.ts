import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/search-country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit {

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private SearchCountryService: CountryService 
  ) { }

  country: Country[] = [];
  errorMessage: string = '';
  error: Boolean = false;

  ngOnInit(): void {
    this.ActivatedRoute.params
      .subscribe(({id}) => {
        this.error = false; 
        this.SearchCountryService.searchCountryByCode(id)
          .subscribe(response => {
            console.log(response)
            this.country = response;
          }, (error) => {
            this.error = true;
            this.errorMessage = `Can't find any country matching ${id}`;
            this.country = [];
          })
      })
  }

}
