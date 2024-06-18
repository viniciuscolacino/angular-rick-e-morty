import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharactersService } from '@services/characters.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavComponent } from '@shared/nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    NavComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  #charactersService = inject(CharactersService);
  favoritesTotal$ = this.#charactersService.favoritesTotal;
}
