import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { Todo } from 'src/app/shared/models/todo';
import { CategoryService } from 'src/app/shared/services/category-service';
import { TodoService } from 'src/app/shared/services/todo-service';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  errors = "";
  categories$ = this._categoryService.categories$;

  constructor(
    private _todoService: TodoService,
    private _userService: UserService,
    private _categoryService: CategoryService,
    private _router: Router,
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const todo = new Todo();
      todo.title = form.value.title;
      todo.isCompleted = !!form.value.isCompleted;
      todo.userId = this._userService.getCurrentUser().id;
  
      const categoryId = form.value.category;
      if (categoryId) {
        this._categoryService.findById(categoryId).subscribe(category => {
          todo.category = category;
          this.createTodoAndNavigate(todo, form);
        });
      } else {
        this.createTodoAndNavigate(todo, form);
      }
    }
  }

  private createTodoAndNavigate(todo: Todo, form: NgForm): void {
    this._todoService.create(todo).subscribe({
      next: created => {
        this._router.navigate(['/todos']);
        form.reset();
      },
      error: () => {
        this.errors = "La création n'a pas pu aboutir";
      },
    });
  }
}
