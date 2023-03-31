import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user-service';
import { Todo } from 'src/app/shared/models/todo';
import { CategoryService } from 'src/app/shared/services/category-service';
import { TodoService } from 'src/app/shared/services/todo-service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos$ = this._todoService.todos$;
  selectedTodo!: Todo;
  categories$ = this._categoryService.categories$;
  selectedCategory = 0;
  currentUser = this._userService.getCurrentUser();

  constructor(
    private _todoService: TodoService,
    private _categoryService: CategoryService,
    private _userService: UserService,
  ) { }

  selectTodo(selectedTodo: Todo) {
    this.selectedTodo = selectedTodo;
  }

  toggleStateTodo(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this._todoService.update(todo);
  }

  editTodo(todo: Todo) {
    this._todoService.update(todo);
  }

  deleteTodo(id?: string) {
    this._todoService.delete(id);
  }

  selectCategory() {
    console.log('Selected item:', this.selectedCategory);
    //this.selectedCategory = selectedCategory;
  }
}
