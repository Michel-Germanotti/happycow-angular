import { HttpService } from './../../services/http.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
// import { Map, NavigationControl, Marker } from 'maplibre-gl';

import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import MVT from 'ol/format/MVT';
import VectorTile from 'ol/source/VectorTile';
import TileLayer from 'ol/layer/Tile';
import VectorTileLayer from 'ol/layer/VectorTile';
import View from 'ol/View';

import { applyStyle } from 'ol-mapbox-style';


import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
// export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
export class MapComponent implements AfterViewInit {
  

  map: Map;

  vectorLayer: any;

  featureCount = 0;

  constructor(private http: HttpClient) {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
          opacity: 0.5,
        }),
      ],
      view: new View({
        center: [
          893795.1530639416, 6107104.397286202, 1201418.0526854438,
          6282338.054591487,
        ],
        zoom: 8,
      }),
    });

    (window as any).map = this.map;
  }

  ngAfterViewInit() {
    this.map.setTarget('map');

    this.getStyleData()
      .pipe(
        tap((style) => {
          this.vectorLayer = this.createVectorLayer();

          const styleIds = style.layers.map((style: any) => style.id);
          applyStyle(this.vectorLayer, style, styleIds);

          this.map.addLayer(this.vectorLayer);
        })
      )
      .subscribe();
  }

  createVectorLayer() {
    return new VectorTileLayer({
      renderBuffer: 200,
      declutter: true,
      source: new VectorTile({
        url: 'https://adv-smart.de/tiles/smarttiles_de_public_v1/{z}/{x}/{y}.pbf',
        format: new MVT({}),
      }),
    });
  }

  getStyleData(): Observable<any> {
    return this.http.get(
      'https://adv-smart.de/styles/public/de_style_colour_light.json'
    );
  }

  getFeatureCount() {
    this.featureCount = this.vectorLayer
      .getSource()
      .getFeaturesInExtent(this.map.getView().calculateExtent()).length;
  }

  showUnstyled() {
    this.vectorLayer.setStyle();
  }











  // restaurants: any;

  // map: Map;

  // @ViewChild('map')
  // private mapContainer!: ElementRef<HTMLElement>;

  // constructor(
  //   private httpService : HttpService
  // ) { 
  //   this.map = new Map({
  //     layers: [
  //       new TileLayer({source: new OSM()}),
  //     ],
  //     view: new View({
  //       center: [0, 0],
  //       zoom: 2,
  //     }),
  //     target: 'map',
  //   });
  // }

  
  // ngOnInit(): void {
    
  // }






  // MAPLIBRE-GL

  // map: Map | undefined;


  // ngOnInit(): void {
    
  // }

  // ngAfterViewInit() {

  //   // map
  //   const initialState = { lng: 1.69723, lat: 49.460944, zoom: 14 };

  //   this.map = new Map({
  //     container: this.mapContainer.nativeElement,
  //     style: `https://api.maptiler.com/maps/streets-v2/style.json?key=1Mz9CoPqT2hbyOXNTHNF`,
  //     center: [initialState.lng, initialState.lat],
  //     zoom: initialState.zoom
  //   });

  //   // data API call
  //   this.httpService.getRestaurants().subscribe(data => {
  //     console.log(data.features);
  //     this.restaurants = data.features;
  //     for (let i = 0; i < this.restaurants.length; i++) {
  //       const element = this.restaurants[i].properties;
  //       console.log("x => " + element.x, "y => " + element.y);
  //     }
  //   })
    
  //   // markers
  //   this.map.addControl(new NavigationControl({}), 'top-right');
  //   for (let i = 0; i < this.restaurants.length; i++) {
  //     const element = this.restaurants[i].properties;
  //     console.log(element.x);
  //     new Marker({color: "#FF0000"})
  //     .setLngLat([element.x,element.y])
  //     .addTo(this.map); 
  //   }
  //   // new Marker({color: "#FF0000"})
  //   //   .setLngLat([1.69723,49.460944])
  //   //   .addTo(this.map);      
  // }

  // // x => long : 354305,294987929177734
  // // y => lat : 140112,946929846717105

  // ngOnDestroy() {
  //   this.map?.remove();
  // }

}