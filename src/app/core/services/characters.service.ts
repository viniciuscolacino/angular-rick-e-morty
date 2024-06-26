import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, shareReplay, map, filter, BehaviorSubject, combineLatest, of } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  constructor() { }

  #url: string = `${environment.api}/api/character`;
  #http = inject(HttpClient);
  #favoritesCharacters$ = new BehaviorSubject<Character[]>([]);
  #favoritesTotal$ = new BehaviorSubject<number>(0);

  public getCharacters$(params: any): Observable<any> {
    return this.#http.get<any>(this.#url, { params })
      .pipe(
        shareReplay(),
        map((data) => {
          data.results.find((item: Character) => {
            this.#favoritesCharacters$.getValue().find((favorite) => {
              if (item.id === favorite.id) {
                item.fav = true;
              }
            });
          })

          return data;
        })
      )
  }

  public getFavoriteCharacters$(): Observable<any> {
    return this.#favoritesCharacters$.asObservable();
  }

  get favoritesTotal() {
    return this.#favoritesTotal$.asObservable();
  }

  addFavorite(character: Character) {
    const currentFavorites = this.#favoritesCharacters$.getValue();

    if (!currentFavorites.find((item) => item.id === character.id)) {
      character.fav = true;
      this.#favoritesCharacters$.next([...currentFavorites, character]);
      this.#favoritesTotal$.next(this.#favoritesCharacters$.getValue().length);
    }
  }

  removeFavorite(character: Character) {
    const currentFavorites = this.#favoritesCharacters$.getValue();
    if (currentFavorites.find((item) => item.id === character.id)) {
      character.fav = false;
      const remainingFavorites = currentFavorites.filter(({ id }) => id !== character.id);
      this.#favoritesCharacters$.next(remainingFavorites);
      this.#favoritesTotal$.next(this.#favoritesCharacters$.getValue().length);
    }

  }

}
