import { HttpService } from './../../services/http.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  
  map: Map | undefined;
  restaurants: any;
  elem: any

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(
    private httpService : HttpService

  ) { }

  gps() {
    for (let i = 0; i < this.restaurants.properties.length; i++) {
      const element = this.restaurants.properties[i];
      return console.log(element);
    }
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {

    // map
    const initialState = { lng: 1.69723, lat: 49.460944, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=1Mz9CoPqT2hbyOXNTHNF`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    // data API call
    this.httpService.getRestaurants().subscribe(data => {
      console.log(data.features);
      this.restaurants = data.features;
      // for (let i = 0; i < this.restaurants.length; i++) {
      //   const element = this.restaurants[i].properties;
      //   console.log(element.x);
      // }
    })
    
    // markers
    this.map.addControl(new NavigationControl({}), 'top-right');
    for (let i = 0; i < this.restaurants.length; i++) {
      const element = this.restaurants[i].properties;
      console.log(element.x);
      new Marker({color: "#FF0000"})
      .setLngLat([element.x,element.y])
      .addTo(this.map); 
    }
    // new Marker({color: "#FF0000"})
    //   .setLngLat([1.69723,49.460944])
    //   .addTo(this.map);      
  }

  // x => long : 354305,294987929177734
  // y => lat : 140112,946929846717105

  ngOnDestroy() {
    this.map?.remove();
  }

}