import { Component, OnInit, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Character } from 'app/core/models/character';
import { DatePipe, NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-characters-list-item',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    NgOptimizedImage,
    FontAwesomeModule,
    DatePipe
  ],
  templateUrl: './characters-list-item.component.html',
  styleUrl: './characters-list-item.component.scss'
})

export class CharactersListItemComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<CharactersListItemComponent>);
  readonly data = inject<Character>(MAT_DIALOG_DATA);
  episodeNumbers: any = [];

  ngOnInit(): void {
    this.createEpisodesNumbers();
  }

  createEpisodesNumbers() {
    this.data.episode.map((ep: string) => {
      const url = ep;
      const episodeNumber = url.split('/').pop();
      this.episodeNumbers.push(episodeNumber);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
