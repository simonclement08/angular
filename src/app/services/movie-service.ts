import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movies$ = new BehaviorSubject<Movie[]>([]);

  constructor(private _http: HttpClient) {
    this.findAll();
  }

  public findAll() {
    this._http
      .get<Movie[]>('http://localhost:3000/movies')
      .subscribe(moviesFromApi => {
        this.movies$.next(moviesFromApi);
      });
  }

  public findByFavorite() {
    return this._http.get<Movie[]>('http://localhost:3000/movies?isFavorite=true');
  }

  public findByTitle(search:string) {
    return this._http.get<Movie[]>('http://localhost:3000/movies?q=' + search);
  }

  public create(movie: Movie) {
    this._http
      .post<Movie>('http://localhost:3000/movies', movie)
      .subscribe(newMovie => {
        this.movies$.next([
          newMovie,
          ...this.movies$.value,
        ]);
      });
  }

  public update(movie: Movie) {
    this._http
      .put<Movie>(`http://localhost:3000/movies/${movie.id}`, movie)
      .subscribe(updated => {
        const m = this.movies$.value.find(m => m.id == movie.id);
      });
  }
}