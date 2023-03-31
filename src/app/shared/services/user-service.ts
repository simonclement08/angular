import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseUrl = 'http://localhost:3000/users';
  public users$ = new BehaviorSubject<User[]>([]);
  private currentUser!: User;
  
  constructor(private _http: HttpClient) {
    this.findAll();
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  public setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  public findAll() {
    this._http
      .get<User[]>(this._baseUrl)
      .subscribe(usersFromApi => {
        this.users$.next(usersFromApi);
      });
  }

  public findById(id?: string) {
    return this._http.get<User>(`${this._baseUrl}/${id}`);
  }

  public create(user: User) {
    return this._http
      .post<User>(this._baseUrl, user)
      .pipe(
        tap(() => setTimeout(() => {
          this.findAll();
        }, 500))
      );
  }

  public update(user: User) {
    this._http
      .put<User>(`${this._baseUrl}/${user.id}`, user)
      .subscribe(() => this.findAll());
  }

  public delete(id?: string) {
    if (id) {
      this._http
        .delete<User>(`${this._baseUrl}/${id}`)
        .subscribe(() => this.findAll());
    }
  }
}