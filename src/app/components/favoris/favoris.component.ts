import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie-service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent {
  movies$ = this._movieService.findByFavorite();

  constructor(
    private _movieService: MovieService
  ) {}

  toggleFavori(movie: Movie) {
    movie.isFavorite = !movie.isFavorite;
    this._movieService.update(movie);
  }
}
