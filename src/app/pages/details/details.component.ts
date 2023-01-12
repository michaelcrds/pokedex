import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public pokemon : any;
  public isLoading : boolean = false;
  public error : boolean = false;

  private urlJapaneseName: string = "https://pokeapi.co/api/v2/pokemon-species/";
  private urlPokemonStats : string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(
    private activatedRoute : ActivatedRoute,
    private pokeApiService : PokeApiService
  ){}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){
    const id  = this.activatedRoute.snapshot.params['id'];
    const japaneseName = this.pokeApiService.getPokemon(this.urlJapaneseName + id);
    const pokemonStats = this.pokeApiService.getPokemon(this.urlPokemonStats + id);

    forkJoin([japaneseName, pokemonStats]).subscribe({
      next: (res) => {
        this.pokemon = res
        this.isLoading = true
      },
      error: (error) => this.error = true
    })
  }

}
