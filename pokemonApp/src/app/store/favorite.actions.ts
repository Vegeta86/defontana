import { createAction, props } from '@ngrx/store';

export const setFavorite = createAction(
  '[Favorite] Set Favorite',
  props<{ pokemonId: string }>()
);

export const clearFavorite = createAction('[Favorite] Clear Favorite');
