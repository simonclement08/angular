import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: Movie[] = [
    new Movie(1, 'The Shawshank Redemption', 'https://i.etsystatic.com/16821137/r/il/c8b3e3/1879586236/il_570xN.1879586236_kdtm.jpg', 1994, [new Category(1, 'Drama')], false),
    new Movie(2, 'The Godfather', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81bpUqC2F0S._AC_SY679_.jpg', 1972, [new Category(1, 'Drama'), new Category(2, 'Crime')], false),
    new Movie(3, 'The Dark Knight', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81rGCm0PyHL._AC_SL1500_.jpg', 2008, [new Category(2, 'Action'), new Category(3, 'Crime'), new Category(4, 'Drama')], true)
  ];

  filter: string = '';

  get filteredMovies(): Movie[] {
    return this.movies.filter(movie => movie.title.toLowerCase().includes(this.filter.toLowerCase()));
  }

  toggleFavori(movie: Movie) {
    movie.isFavorite = !movie.isFavorite;
  }
}
