import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedUser: User | null;

  constructor(private userService: UserService) {
    this.selectedUser = this.userService.getCurrentUser();
  }
}
