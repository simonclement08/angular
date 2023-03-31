import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private _baseUrl = 'http://localhost:3000/categories';
  public categories$ = new BehaviorSubject<Category[]>([]);
  
  constructor(private _http: HttpClient) {
    this.findAll();
  }

  public findAll() {
    this._http
      .get<Category[]>(this._baseUrl)
      .subscribe(categoriesFromApi => {
        this.categories$.next(categoriesFromApi);
      });
  }

  public findById(id?: string) {
    return this._http.get<Category>(`${this._baseUrl}/${id}`);
  }

  public create(category: Category) {
    return this._http
      .post<Category>(this._baseUrl, category)
      .pipe(
        tap(() => setTimeout(() => {
          this.findAll();
        }, 500))
      );
  }

  public update(category: Category) {
    this._http
      .put<Category>(`${this._baseUrl}/${category.id}`, category)
      .subscribe(() => this.findAll());
  }

  public delete(id?: string) {
    if (id) {
      this._http
        .delete<Category>(`${this._baseUrl}/${id}`)
        .subscribe(() => this.findAll());
    }
  }
}