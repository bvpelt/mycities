import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { City } from '../model/city.model';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url: string = 'http://localhost:3000/cities';
  sub$: Observable<City[] | any> = null;

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[] | any> {
    this.sub$ = this.http
      .get<City[]>(this.url).pipe(
        tap(result => console.log('Opgehaald via: ', this.url, ' result:', result)),
        catchError(err => {
          console.log('Geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
          // De methode moet een observable terug geven
          // genereer daarom een observable op basis van err
          return of(err);
        }));
    return this.sub$;
  }

  getCity(id: number): Observable<City | any> {
    return this.http.get<City>(`${this.url}/${id}`).pipe(
      tap(result => console.log('Opgehaald via: ', this.url, '/', id, ' result:', result)),
      catchError(err => {
        console.log('Geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
        // De methode moet een observable terug geven
        // genereer daarom een observable op basis van err
        return of(err);
      }));
  }

  addCity(city: City): Observable<City | any> {
    return this.http.post<City>(this.url, city).pipe(
      tap(result => console.log('Created via: ', this.url, ' result:', result)),
      catchError(err => {
        console.log('Geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
        // De methode moet een observable terug geven
        // genereer daarom een observable op basis van err
        return of(err);
      }));
    //this.cities.push(addedCity);
  }

  removeCity(city: City): Observable<any> {
    return this.http.delete<City>(`${this.url}/${city.id}`).pipe(
      tap(result => console.log('Deleted via: ', this.url, '/', city.id, ' result:', result)),
      catchError(err => {
        console.log('Geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
        // De methode moet een observable terug geven
        // genereer daarom een observable op basis van err
        return of(err);
      }));
  }
}
