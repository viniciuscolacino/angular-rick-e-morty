import { Component, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { CharactersService } from '@services/characters.service';
import { Observable } from 'rxjs';
import { Character } from './core/models/character';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { resolve } from 'path';
import { HeaderComponent } from '@shared/layout/header/header.component';

// font awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule, HeaderComponent, FontAwesomeModule],
  template: `
    <app-header />
    <router-outlet />
  `,
  //templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'Rick-e-Morty';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
