// Core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Developer's
import { Country } from '../../interfaces/search-country.interface';
import { CountryService } from '../../services/country.service';
// rxjs
import { switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
    `
      .info-container {
        margin: 10px;
        padding: 20px;
        border-radius: 5px;
        border: 1px solid gray;
      }
      img {
        width: 10rem;
      }
    `
  ]
})
export class SeeCountryComponent implements OnInit {

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private SearchCountryService: CountryService 
  ) { }

  country!: Country;
  errorMessage: string = '';
  error: Boolean = false;
  translations: any = [];

  ngOnInit(): void {
    this.ActivatedRoute.params
      .pipe(
        switchMap(({id}) => this.SearchCountryService.searchCountryByCode(id)),
        tap(console.log)
      )
      .subscribe(response => {
        this.country = response[0];
        this.translations = response[0].translations
      })
  }

}
