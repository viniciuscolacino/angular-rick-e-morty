import { Component, HostBinding, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CharactersService } from '@services/characters.service';
import { CharactersListItemPreviewComponent } from '@components/characters-list-item-preview/characters-list-item-preview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Subscription, } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmptyListComponent } from '@shared/empty-list/empty-list.component';
import { MatInput, MatLabel, MatFormField, MatSuffix, MatPrefix, MatHint } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { Episode } from 'app/core/models/episode';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CharactersListItemPreviewComponent,
    EmptyListComponent,
    FontAwesomeModule,
    FormsModule,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatPrefix,
    MatSuffix,
    MatIconModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})

export default class CharactersListComponent implements OnInit, OnDestroy {
  searchQuery$ = new BehaviorSubject<string>('');
  params = {} as any;
  pagesCount = signal(1);
  pagesTotal = signal(0);
  errorNotFound = signal(false);

  #charactersService = inject(CharactersService);
  characters$ = signal([]);
  favoritesCharacters$ = this.#charactersService.getFavoriteCharacters$();
  characterSubscription = new Subscription();

  paramName: string = '';
  paramEps = {} as any;
  episodes: Episode[] = [];

  ngOnInit(): void {
    this.params.page = 1;
    this.paramEps.page = 1;
    this.searchCharacters();
  }


  searchCharacters() {
    this.params.page = this.pagesCount();

    const sub = this.#charactersService.getCharacters$(this.params).subscribe({
      next: (res: any) => {
        this.pagesTotal.set(res.info.pages);
        this.characters$ = signal(res.results);
        this.errorNotFound.set(false);
      },
      error: (error: any) => {
        if (error.status == 404) {
          this.errorNotFound.set(true);
        }
        this.errorNotFound.set(true);
      },
    })

    this.characterSubscription.add(sub);
  }

  getFavoriteCharacters() {
    this.#charactersService.getFavoriteCharacters$();
  }

  previousPage() {
    if (this.pagesCount() != 1) {
      this.pagesCount.update(val => val - 1);
      this.searchCharacters();
    }
  }

  nextPage() {
    if (this.pagesCount() != this.pagesTotal()) {
      this.pagesCount.update(val => val + 1);
      this.searchCharacters();
    }
  }

  ngOnDestroy(): void {
    this.characterSubscription.unsubscribe();
  }


}
