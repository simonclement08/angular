import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  tasks = [
    { title: 'Faire les courses', completed: false, focused: false },
    { title: 'Réviser pour l\'examen', completed: false, focused: false },
    { title: 'Aller chez le dentiste', completed: true, focused: false },
    { title: 'Faire du sport', completed: false, focused: false },
  ];

  changeDone(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}