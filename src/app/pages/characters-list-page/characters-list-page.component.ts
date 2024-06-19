import { Component } from '@angular/core';
import CharactersListComponent from '@components/characters-list/characters-list.component';

@Component({
  selector: 'app-characters-list-page',
  standalone: true,
  imports: [CharactersListComponent],
  templateUrl: './characters-list-page.component.html',
  styleUrl: './characters-list-page.component.scss'
})

export default class CharactersListPageComponent {

}
