import { Component } from '@angular/core';
import CharactersFavoritesListComponent from '@components/characters-favorites-list/characters-favorites-list.component';

@Component({
  selector: 'app-characters-favorites-list-page',
  standalone: true,
  imports: [CharactersFavoritesListComponent],
  templateUrl: './characters-favorites-list-page.component.html',
  styleUrl: './characters-favorites-list-page.component.scss'
})
export default class CharactersFavoritesListPageComponent {

}
