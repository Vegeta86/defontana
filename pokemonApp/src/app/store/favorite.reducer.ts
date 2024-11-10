import { createReducer, on } from '@ngrx/store';
import { setFavorite, clearFavorite } from './favorite.actions';
import { FavoriteState } from './favorite.model';

export const initialState: FavoriteState = {
  favorite: null,
};

export const favoriteReducer = createReducer(
  initialState,
  on(setFavorite, (state, { pokemonId }) => ({
    ...state,
    favorite: pokemonId || null,
  })),
  on(clearFavorite, state => ({
    ...state,
    favorite: null,
  }))
);
