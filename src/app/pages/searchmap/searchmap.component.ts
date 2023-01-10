import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-searchmap',
  templateUrl: './searchmap.component.html',
  styleUrls: ['./searchmap.component.css']
})
export class SearchmapComponent implements OnInit {

  restaurants: any;

  constructor(    
      private httpService : HttpService
    ) { }

  ngOnInit(): void {
    // API Call
    this.httpService.getRestaurants().subscribe(data => {
      console.log(data.features);
      this.restaurants = data.features;
    })
  }
  

}
