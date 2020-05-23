import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  imdbkey: string = '603826b7'; //'f1f56c8e'; //

  dataurl: string = 'http://www.omdbapi.com/?apikey=' + this.imdbkey + '&';
  posterurl: string = 'http://img.omdbapi.com/?apikey=' + this.imdbkey + '&';
  tmdburl: string = 'https://api.themoviedb.org/3/movie/550?api_key=5749c32630671e3483d9decf0d034c33&language=en-US'
  movies$: Observable<Movie[]>;

  constructor(private http: HttpClient) { }

  searchMovies(keyword: string): Observable<Movie[]> {
    this.movies$ = this.http
      .get<Movie[]>(this.dataurl + `s=${keyword}`)
      .pipe(
        map(res => res['Search']),
        tap(res => console.log('Found movies: ', res))
      );
    return this.movies$;
  }


}
