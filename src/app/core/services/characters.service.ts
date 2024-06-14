import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, shareReplay, map, filter, BehaviorSubject, combineLatest } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  constructor() { }

  #url: string = "https://rickandmortyapi.com/api/character";
  #http = inject(HttpClient);

  public getCharacters$(params: any): Observable<any> {
    return this.#http.get<any>(this.#url, { params })
      .pipe(
        shareReplay(),
        //map(info => info.results),
      )
  }

}
