import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  sub$: Observable<City[]> = null;

  private cities: City[] = [
    new City(1, 'Groningen', 'GR', 'assets/Groningen.jpg'),
    new City(2, 'Hengelo', 'OV', 'assets/Hengelo.jpg'),
    new City(3, 'Den Haag', 'ZH', 'assets/DenHaag.jpg'),
    new City(4, 'Enschede', 'OV', 'assets/Enschede.jpg')
  ];

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    this.sub$ = this.http
      .get<City[]>('./assets/data/cities.json')
      .pipe(
        tap(result => console.log('Opgehaald via JSON: ', result))
      );

    return this.sub$;
  }

  getCity(id: number): City {
    return this.cities.find(c => c.id === id);
  }

  addCity(name: string): void {
    let addedCity = new City(
      this.cities.length + 1,
      name,
      'Onbekend');
    this.cities.push(addedCity);
  }

  removeCity(city: City): void {
    var index: number = this.cities.findIndex(c => c.id === city.id);
    if (index) {
      this.cities.splice(index, 1);
    }
  }
}
