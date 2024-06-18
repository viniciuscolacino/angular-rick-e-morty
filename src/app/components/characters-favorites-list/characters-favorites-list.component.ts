import { Component, inject } from '@angular/core';
import { CharactersService } from '@services/characters.service';
import { CharactersListItemPreviewComponent } from '@components/characters-list-item-preview/characters-list-item-preview.component';
import { AsyncPipe } from '@angular/common';
import { EmptyListComponent } from '@shared/empty-list/empty-list.component';
import { NgClass } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-characters-favorites-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CharactersListItemPreviewComponent,
    EmptyListComponent,
    FontAwesomeModule,
    JsonPipe,
    NgClass,
    RouterLink,
  ],
  templateUrl: './characters-favorites-list.component.html',
  styleUrl: './characters-favorites-list.component.scss',
  host: { 'class': 'app-characters-favorites-list' }
})

export default class CharactersFavoritesListComponent {
  #charactersService = inject(CharactersService);
  favoritesCharacters$ = this.#charactersService.getFavoriteCharacters$();
}
