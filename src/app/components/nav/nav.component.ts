import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() changeFilter = new EventEmitter<string>();

  constructor() { }

  selectFilter(filter: string) {
    this.changeFilter.emit(filter);
  }
}
