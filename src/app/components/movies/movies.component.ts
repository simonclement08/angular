import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies$ = this._movieService.movies$;

  constructor(
    private _movieService: MovieService
  ) {}

  toggleFavori(movie: Movie) {
    movie.isFavorite = !movie.isFavorite;
    this._movieService.update(movie);
  }
}
