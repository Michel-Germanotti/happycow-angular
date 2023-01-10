import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { SearchComponent } from './components/header/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchmapComponent } from './pages/searchmap/searchmap.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    NavBarComponent,
    SearchComponent,
    CarouselComponent,
    SearchmapComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
