import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { TodoService } from 'src/app/shared/services/todo-service';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {
  users: User[] = [];

  constructor(
    private router: Router,
    private _userService: UserService,
    private _todosService: TodoService
  ) { }

  ngOnInit(): void {
    this._userService.users$.subscribe((users) => {
      this.users = users;
    });
  }

  selectUser(user: User): void {
    this._userService.setCurrentUser(user);
    this._todosService.findByUser(user);
    this.router.navigate(['/todos']);
  }
}
