import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CharactersService } from '@services/characters.service';
import { CharactersListItemPreviewComponent } from '@components/characters-list-item-preview/characters-list-item-preview.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CharactersListItemPreviewComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})

export default class CharactersListComponent {
  #charactersService = inject(CharactersService);
  characters$ = toSignal(this.#charactersService.getCharacters$());
}
