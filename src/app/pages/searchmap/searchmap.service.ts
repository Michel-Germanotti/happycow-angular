import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchmapService {

  // private url = 'https://api-adresse.data.gouv.fr/search/?q=20%20avenue%20de%20S%C3%A9gur%2C%20Paris&type=housenumber&autocomplete=1';

  constructor(    
    private http : HttpClient
    ) { }


  getRestaurants() {
    // return this.http.get(this.url);
  }
}
