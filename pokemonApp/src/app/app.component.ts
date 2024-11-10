import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemonApp';
  favoritePokemon: any = null;
  selectedPokemon: any = null;
  dataSource: any = null;

  onSelectPokemon(pokemonName: string): void {
    this.selectedPokemon = pokemonName;
  }
  onDataSource(data: any) {    
    this.dataSource = data;
  }
}
