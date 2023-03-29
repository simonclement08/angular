import { Category } from './category';

export class Movie {
  constructor(
    public id: number,
    public title: string,
    public poster: string,
    public releaseYear: number,
    public categories: Category[],
    public isFavorite: boolean
  ) {}
}
