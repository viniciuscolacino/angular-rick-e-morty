import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subscription, map, shareReplay, tap } from 'rxjs';
import { Episode } from '../models/episode';
import { Character } from '../models/character';
import { dot } from 'node:test/reporters';

@Injectable({
  providedIn: 'root'
})

export class EpisodesService {

  constructor() {
    this.getAllEpisodes$();
  }

  #url: string = `${environment.api}/api/episode`
  #http = inject(HttpClient);

  #episodes$ = new BehaviorSubject<any>([]);
  #episodes = signal<Episode[]>([]);
  params = { page: 1 } as any;

  public getEpisodes$(params: any): Observable<any> {
    return this.#http.get<any>(this.#url, { params });
  }

  async getAllEpisodes$(): Promise<Observable<any>> {
    this.getEpisodes$(this.params)
      .subscribe({
        next: (res: any) => {
          this.#episodes$.next([...this.#episodes$.getValue(), ...res.results]);

          this.#episodes.update(val => {
            return [...val, ...res.results]
          });

          if (res.info.next) {
            this.params.page++;
            this.getAllEpisodes$();
          }
        }
      })

    return this.#episodes$.asObservable();
  }

  getEpisodesList() {
    return this.#episodes$.asObservable();
  }
}
