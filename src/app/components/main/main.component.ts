import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  tasks = [
    { title: 'Faire les courses', completed: false },
    { title: 'Réviser pour l\'examen', completed: false },
    { title: 'Aller chez le dentiste', completed: true },
    { title: 'Faire du sport', completed: false },
  ];
}