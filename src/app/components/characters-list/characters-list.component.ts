import { Component, OnDestroy, OnInit, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CharactersService } from '@services/characters.service';
import { CharactersListItemPreviewComponent } from '@components/characters-list-item-preview/characters-list-item-preview.component';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Character } from 'app/core/models/character';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CharactersListItemPreviewComponent, ReactiveFormsModule, AsyncPipe, FormsModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})

export default class CharactersListComponent implements OnInit, OnDestroy {
  searchQuery$ = new BehaviorSubject<string>('');
  params = {} as any;
  pagesCount = signal(1);
  pagesTotal = signal(0);

  #charactersService = inject(CharactersService);
  //characters$ = toSignal(this.#charactersService.getCharacters$(this.params));
  characters$ = signal([]);

  ngOnInit(): void {
    this.params.page = 1;
    this.searchCharacters();
  }

  searchCharacters() {
    this.params.page = this.pagesCount();
    this.#charactersService.getCharacters$(this.params).subscribe({
      next: (res: any) => {
        this.pagesTotal.set(res.info.pages);
        this.characters$ = signal(res.results);
      },
      error: (error: any) => {
        console.log(error);
      },
    })
  }

  // loadCharacters() {
  //   this.pagesCount.update(val => val + 1);
  //   console.log(this.pagesCount());
  //   this.searchCharacters();
  // }

  previousPage() {
    if (this.pagesCount() != 1) {
      //this.params.page -= 1;
      this.pagesCount.update(val => val - 1);
      this.searchCharacters();
    }
  }

  nextPage() {
    if (this.pagesCount() != this.pagesTotal()) {
      //this.params.page += 1;
      this.pagesCount.update(val => val + 1);
      this.searchCharacters();
    }
  }

  ngOnDestroy(): void {
  }


}
