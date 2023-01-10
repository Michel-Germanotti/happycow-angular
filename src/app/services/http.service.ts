import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  restaurants: any;

  constructor(
    private http : HttpClient
  ) { }

  getRestaurants() {
    // API Call
		return this.http
    .get<any>('https://api-adresse.data.gouv.fr/search/?q=76220&type=municipality&autocomplete=10&limit=100')
    // .subscribe(data => {
    //   this.restaurants = data.features;
    //   console.log(data);
    // });
  }
}
