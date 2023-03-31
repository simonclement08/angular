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
  
  constructor(private _http: HttpClient, private userService: UserService) {
    const user = userService.getCurrentUser()
    this.findByUser(user);
  }

  public findById(id?: string) {
    return this._http.get<Todo>(`${this._baseUrl}/${id}`);
  }

  public findByUser(user?: User|null) {
      if (user != null){
        this._http
        .get<Todo[]>(this._baseUrl + `?user_id=${user.id}`)
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
          this.findByUser();
        }, 500))
      );
  }

  public update(todo: Todo) {
    this._http
      .put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
      .subscribe(() => this.findByUser());
  }

  public delete(id?: string) {
    if (id) {
      this._http
        .delete<Todo>(`${this._baseUrl}/${id}`)
        .subscribe(() => this.findByUser());
    }
  }
}