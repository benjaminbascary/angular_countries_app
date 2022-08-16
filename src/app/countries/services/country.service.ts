import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces
import { Country } from '../interfaces/search-country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private BASE_URL: string = "https://restcountries.com/v3.1"
  private BY_NAME: string = "name" 

  constructor(private http: HttpClient) { }
 
  searchCountry( searchTerm: string): Observable<Country[]> {
    const URL = `${this.BASE_URL}/${this.BY_NAME}/${searchTerm}`;
    return this.http.get<Country[]>(URL);
  }
}
