import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/model/movie.model';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  keyword: string = '';

  public movies$: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  findMovie() {
    if (this.keyword) {
      this.movies$ = this.movieService.searchMovies(this.keyword);
    }
    this.keyword = '';
  }

  posterAvailable(movie: Movie): boolean {
    return (movie.Poster && movie.Poster != "N/A");
  }

  showPoster(movie: Movie): void {

  }
}
