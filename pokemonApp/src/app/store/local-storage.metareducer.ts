import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { FavoriteState } from './favorite.model';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);

    if (action.type !== INIT && action.type !== UPDATE && nextState.favorite.favorite !== null) {
      localStorage.setItem('favorite', JSON.stringify(nextState.favorite));
    }

    return nextState;
  };
}

export function rehydrateState(): { favorite: FavoriteState } {
  const storedFavorite = localStorage.getItem('favorite');
  return storedFavorite ? { favorite: JSON.parse(storedFavorite) } : { favorite: { favorite: null } };
}
