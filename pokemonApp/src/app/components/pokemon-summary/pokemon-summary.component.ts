import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatTableDataSource } from '@angular/material/table';

interface PokemonCount {
  letter: string;
  count: number;
}

@Component({
  selector: 'app-pokemon-summary',
  templateUrl: './pokemon-summary.component.html',
})
export class PokemonSummaryComponent implements OnInit {

  @Input() data: any;
  displayedColumns: string[] = ['letter', 'count'];
  dataSource = new MatTableDataSource<PokemonCount>([]);
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.fetchAndCountPokemons();
  }

  fetchAndCountPokemons(): void {
    this.pokemonService.getPokemonList(150, 0).subscribe(
      response => {
        const counts = this.countPokemonsByLetter(response.results);
        this.dataSource.data = counts;        
      },
      error => {
        console.error('Error al obtener los Pokémon:', error);
      }
    );
  }

  countPokemonsByLetter(pokemons: any[]): PokemonCount[] {
    const letterCounts: { [key: string]: number } = {};
    pokemons.forEach(pokemon => {
      const firstLetter = pokemon.name.charAt(0).toUpperCase();
      if (!letterCounts[firstLetter]) {
        letterCounts[firstLetter] = 0;
      }
      letterCounts[firstLetter]++;
    });
    return Object.keys(letterCounts).sort().map(letter => ({
      letter,
      count: letterCounts[letter],
    }));
  }
}