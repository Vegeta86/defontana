import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss'],
})
export class PokemonFavoriteComponent implements OnInit {
  favorite$: Observable<string | null>;
  favorite: string | null = null;

  constructor(private store: Store<{ favorite: { favorite: string | null } }>) {
    this.favorite$ = store.select(state => state.favorite.favorite);
  }

  ngOnInit(): void {
    this.getFavorite();
  }

  getFavorite(): void {
    this.store
      .select(state => state.favorite?.favorite)
      .pipe(first())
      .subscribe(favorite => {
        this.favorite = favorite;
      });
  }
}
