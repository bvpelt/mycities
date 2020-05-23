import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { tap, retry, delay } from 'rxjs/operators';

import { City } from './shared/model/city.model';
import { CityService } from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  newCity: string;
  currentCity: City;
  cities$: Observable<City[]>;
  showCities: boolean = true;
  toggleMsg: string = ' lijst met steden';

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.title = 'Mijn favoriete steden';
    this.cities$ = this.cityService.getCities();

  }

  ngOnDestroy() {

  }

  order(): void {
    alert('order accepted');
  }

  toggleCities(): void {
    this.showCities = !this.showCities;
    this.showCities ? this.toggleMsg = 'Verberg lijst met steden'
      : this.toggleMsg = 'Toon lijst met steden';
  }

  showCity(city: City): void {
    this.currentCity = city;
  }

  changeCity(value: string): void {
    this.newCity = value;
  }

  addCity(): void {

  }

  verwijderCity(city: City): void {
  }
}
