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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule, HeaderComponent],
  // template: `
  //   <img src="assets/img/rick-and-morty-logo.svg">
  //   <router-outlet />
  // `,
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'Rick-e-Morty';
}
