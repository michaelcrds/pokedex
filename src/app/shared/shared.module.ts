import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingErrorComponent } from './loading-error/loading-error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PokeListComponent,
    SearchComponent,
    LoadingErrorComponent
  ],
  exports: [
    HeaderComponent,
    PokeListComponent,
    SearchComponent,
    LoadingErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
