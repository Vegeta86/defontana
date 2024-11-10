import { Component, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setFavorite, clearFavorite } from '../../store/favorite.actions';
import { first, Observable } from 'rxjs';


@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {

  searchControl = new FormControl('');
  displayedColumns: string[] = ['pokemon-name'];
  allPokemons: any[] = [];
  dataSource = new MatTableDataSource<any>([]);
  @Output() selectedPokemon = new EventEmitter<string>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginatorLength: number = 150;
  offset: number = 0
  dataLoaded: boolean = false;
  favorite$: Observable<string | null>;


  constructor(private pokemonService: PokemonService, private store: Store<{ favorite: { favorite: string | null } }>) {
    this.favorite$ = store.select(state => state.favorite?.favorite ?? null);
   }

  ngOnInit(): void {
    this.loadPokemonList(this.paginatorLength, this.offset);
    this.searchControl.valueChanges.subscribe(value => {
      this.filterPokemons(value!);
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  loadPokemonList(limit: number, offset: number): void {
    this.pokemonService.getPokemonList(limit, offset).subscribe((data) => {
      this.dataSource.data = data.results;
      this.allPokemons = this.dataSource.data;
      this.dataLoaded = true;
      this.selectedPokemon.emit('bulbasaur');

    });
  }

  onPageChange(event: any): void {
    const offset = event.pageIndex * event.pageSize;
  }

  onSelectPokemon(name: string): void {
    this.selectedPokemon.emit(name);
  }

  filterPokemons(searchText: string) {
    if (searchText.length >= 3) {
      const filteredData = this.allPokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchText.toLowerCase())
      });
      this.dataSource.data = filteredData;
    } else {
      this.dataSource.data = this.allPokemons;
    }
  }

  markAsFavorite(pokemonId: string | null): void {
    if (pokemonId) {
      this.store.dispatch(setFavorite({ pokemonId }));
    } else {
      this.store.dispatch(clearFavorite());
    }
  }
}
