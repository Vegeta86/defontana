import { Component, Input, OnChanges } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {
  @Input() pokemonName: string = '';
  pokemonDetails: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (this.pokemonName) {
      this.pokemonService.getPokemonDetails(this.pokemonName).subscribe((data) => {
        this.pokemonDetails = data;
      });
    }
  }

}
