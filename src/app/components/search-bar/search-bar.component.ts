import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output()
  doSearch = new EventEmitter<string>();

  onEnter(value: string) {
    this.doSearch.emit(value);
  }
}
