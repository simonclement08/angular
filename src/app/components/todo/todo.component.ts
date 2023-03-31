import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo-service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo;

  constructor(
    private _todoService: TodoService
  ) { }

  toggleStateTodo(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this._todoService.update(todo);
  }

  deleteTodo(id?: number) {
    this._todoService.delete(id);
  }
}
