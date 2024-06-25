import { Component, OnInit, inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Character } from 'app/core/models/character';
import { AsyncPipe, DatePipe, NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EpisodesService } from '@services/episodes.service';
import { Episode } from 'app/core/models/episode';
import { Subscription } from 'rxjs';
import { AvatarComponent } from '@shared/avatar/avatar.component';

@Component({
  selector: 'app-characters-list-item',
  standalone: true,
  imports: [
    AsyncPipe,
    AvatarComponent,
    DatePipe,
    FontAwesomeModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    NgOptimizedImage,
  ],
  templateUrl: './characters-list-item.component.html',
  styleUrl: './characters-list-item.component.scss',
  host: {
    'class': 'custom-scrollbar',
  }
})

export class CharactersListItemComponent {
  readonly dialogRef = inject(MatDialogRef<CharactersListItemComponent>);
  readonly data = inject<Character>(MAT_DIALOG_DATA);

  episodeNumbers: any = [];
  #episodesService = inject(EpisodesService);
  episodes$ = this.#episodesService.getEpisodesList();
  episodesAppearence: Episode[] = [];

  params = {} as any;
  episodesSubscription = new Subscription();

  constructor() {
    const sub = this.episodes$.subscribe({
      next: (next) => {
        this.createEpisodesNumbers(next);
      }
    })

    this.episodesSubscription.add(sub);
  }

  createEpisodesNumbers(completeList: Episode[]) {
    this.data.episode.map((ep: string) => {
      const url = ep;
      let episodeNumber = url.split('/').map(e => parseInt(e)).pop();

      completeList.find((item) => {
        if (item.id == episodeNumber) {
          if (!this.episodesAppearence.includes(item)) {
            this.episodesAppearence.push(item);
          }
        }
      })
    })
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.episodesSubscription.unsubscribe();
  }
}
