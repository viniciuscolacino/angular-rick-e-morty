import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharactersService } from '@services/characters.service';
import { AsyncPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    AsyncPipe,
    FontAwesomeModule,
    NgClass,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  #charactersService = inject(CharactersService);
  favoritesTotal$ = toSignal(this.#charactersService.favoritesTotal);
}
