import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{
  private setAllPokemon : any;
  public getAllPokemon : any;
  public error : boolean = false;

  constructor(
    private pokeApiService:PokeApiService
  ){}

  ngOnInit(): void {
    this.getAllPokemons()
  }

  public getAllPokemons(){
    this.pokeApiService.listAll.subscribe({
      next: (res) => {
        this.setAllPokemon = res.results
        this.getAllPokemon = this.setAllPokemon
      },
      error: (error) => this.error = true
    })
  }

  public getSearch(value:string){
    const filter = this.setAllPokemon.filter((res:any) => !res.name.indexOf(value.toLocaleLowerCase()))

    this.getAllPokemon = filter
  }
}
