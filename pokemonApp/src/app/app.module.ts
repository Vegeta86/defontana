import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/favorite.reducer';
import { localStorageSyncReducer, rehydrateState } from './store/local-storage.metareducer';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonSummaryComponent } from './components/pokemon-summary/pokemon-summary.component';
import { PokemonFavoriteComponent } from './components/pokemon-favorite/pokemon-favorite.component';
import { CapitalizePipe } from './components/pipes/capitalize.pipe';

const metaReducers: MetaReducer[] = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    PokemonTableComponent,
    PokemonDetailComponent,
    PokemonSummaryComponent,
    PokemonFavoriteComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    StoreModule.forRoot({ favorite: favoriteReducer }, { metaReducers, initialState: rehydrateState() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CapitalizePipe]
})
export class AppModule { }