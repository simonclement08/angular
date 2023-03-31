import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { Todo } from 'src/app/shared/models/todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() updateTodo = new EventEmitter<Todo>();

  constructor() { }

  onDelete(): void {
    this.deleteTodo.emit(this.todo);
  }

  onToggleComplete(): void {
    const updatedTodo = { ...this.todo, completed: !this.todo.isCompleted };
    this.updateTodo.emit(updatedTodo);
  }
}
