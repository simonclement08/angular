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
  categories$ = this._categoryService.categories$;
  selectedCategory = 0;
  currentUser = this._userService.getCurrentUser();

  constructor(
    private _todoService: TodoService,
    private _categoryService: CategoryService,
    private _userService: UserService,
  ) { }


  onCategoryChange() {
    if (this.selectedCategory != 0) {
      this._todoService.findByUserWithFilter(this.currentUser, this.selectedCategory);
    } else {
      this._todoService.findByUser(this.currentUser);
    }
  }
}
