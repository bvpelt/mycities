import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { tap, retry, delay } from 'rxjs/operators';

import { City } from './shared/model/city.model';
import { CityService } from './shared/services/city.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  newCity: string;
  newProvince: string;
  currentCity: City;
  showCurrentCity: City;
  cities$: Observable<City[]>;
  showCities: boolean = true;
  toggleMsg: string = ' lijst met steden';
  trashIcon = faTrash;
  editIcon = faEdit;

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
    this.showCurrentCity = city;
  }

  updateCity(city: City): void {

  }

  editCity(city: City): void {
    this.currentCity = city;
  }

  addCity(): void {
    let currentCity: City = new City(null,
      this.newCity,
      this.newProvince);
    this.cityService.addCity(currentCity)
      .subscribe(
        res => {
          console.log('Added city ', currentCity.name);
          // get new list
          this.cities$ = this.cityService.getCities();
        },
        err => {
          console.error('Error during adding city ', currentCity.name, ': ', err);
        },
        () => {
          console.log('addCity ready');
          this.newCity = null;
          this.newProvince = null;
        }
      )
  }

  verwijderCity(city: City): void {
    this.cityService.removeCity(city)
      .subscribe(
        res => {
          console.log('Removed city ', city.name);
          // get new list
          this.cities$ = this.cityService.getCities();
        },
        err => {
          console.error('Error during removing city ', city.name, ': ', err);
        },
        () => {
          console.log('verwijderCity ready');
        }
      )
  }
}
