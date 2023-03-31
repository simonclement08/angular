import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Todo } from '../models/todo';
import { User } from '../models/user';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private _baseUrl = 'http://localhost:3000/todos';
  public todos$ = new BehaviorSubject<Todo[]>([]);
  private user: User;
  
  constructor(private _http: HttpClient, private userService: UserService) {
    this.user = userService.getCurrentUser()
    this.findByUser(this.user);
  }

  public findById(id?: string) {
    return this._http.get<Todo>(`${this._baseUrl}/${id}`);
  }

  public findByUser(user?: User|null) {
      if (user != null){
        this._http
        .get<Todo[]>(this._baseUrl + `?userId=${user.id}`)
        .subscribe(todosFromApi => {
          this.todos$.next(todosFromApi);
        });
      }
  }

  public findByUserWithFilter(user: User|null, filter: number) {
    if (user != null){
      this._http
      .get<Todo[]>(this._baseUrl + `?userId=${user.id}&category.id=${filter}`)
      .subscribe(todosFromApi => {
        this.todos$.next(todosFromApi);
      });
    }
}

  public create(todo: Todo) {
    return this._http
      .post<Todo>(this._baseUrl, todo)
      .pipe(
        tap(() => setTimeout(() => {
          this.findByUser(this.user);
        }, 500))
      );
  }

  public update(todo: Todo) {
    this._http
      .put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
      .subscribe(() => this.findByUser(this.user));
  }

  public delete(id?: number) {
    this._http
      .delete<Todo>(`${this._baseUrl}/${id}`)
      .subscribe(() => this.findByUser(this.user));
  }
}