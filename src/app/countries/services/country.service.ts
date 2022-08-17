import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

// Interfaces
import { Country } from '../interfaces/search-country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private BASE_URL: string = "https://restcountries.com/v3.1";
  private BY_NAME: string = "name"; 
  private BY_CAPITAL: string = "capital";
  private BY_REGION: string = "region";
  private BY_ALPHA: string = "alpha";
  
  constructor(private http: HttpClient) { }
  
  private get GenericParams() {
    return new HttpParams().set('fields', 'name,subregion,capital,population,flags,cca2');
  }

  private get DetailsParams() {
    return new HttpParams().set('fields', 'name,flag,flags,altSpellings,population,region,maps');
  } 
  
  searchCountry(searchTerm: string): Observable<Country[]> {
    const URL = `${this.BASE_URL}/${this.BY_NAME}/${searchTerm}`;
    return this.http.get<Country[]>(URL, { params: this.GenericParams });
  }

  searchCountryByCapital(searchTerm: string): Observable<Country[]> {
    const URL = `${this.BASE_URL}/${this.BY_CAPITAL}/${searchTerm}`;
    return this.http.get<Country[]>(URL, { params: this.GenericParams });
  }

  searchCountryByRegion(searchTerm: string) {
    const URL = `${this.BASE_URL}/${this.BY_REGION}/${searchTerm}`;
    return this.http.get<Country[]>(URL, { params: this.GenericParams });
  }

  searchCountryByCode(searchCode: string) {
    const URL = `${this.BASE_URL}/${this.BY_ALPHA}/${searchCode}`;
    return this.http.get<Country[]>(URL, { params: this.DetailsParams });
  }

}
