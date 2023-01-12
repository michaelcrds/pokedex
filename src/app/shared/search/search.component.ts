import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchValue : string = "";

  @Output() public emitSearch : EventEmitter<string> = new EventEmitter()

  public search(){
    this.emitSearch.emit(this.searchValue);
  }

}
