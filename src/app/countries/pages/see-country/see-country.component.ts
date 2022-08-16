// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Developer's
import { Country } from '../../interfaces/search-country.interface';
import { CountryService } from '../../services/country.service';
// rxjs
import { switchMap } from 'rxjs/operators';


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
      .pipe(
        switchMap(({id}) => this.SearchCountryService.searchCountryByCode(id))
      )
      .subscribe(response => {
        this.country = response;
      })
  }

}
