import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, shareReplay, map, filter } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  constructor() { }

  #url: string = "https://rickandmortyapi.com/api/character";
  #http = inject(HttpClient);

  public getCharacters$(): Observable<any> {
    return this.#http.get<any>(this.#url)
      .pipe(
        shareReplay(),
        map(info => info.results)
      )
  }

}
