import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  @Output()
  public add = new EventEmitter();
  @Output()
  public supp = new EventEmitter();
}