import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CharactersService } from '@services/characters.service';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Character } from 'app/core/models/character';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { CharactersListItemComponent } from '@components/characters-list-item/characters-list-item.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-characters-list-item-preview',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, CharactersListItemComponent],
  templateUrl: './characters-list-item-preview.component.html',
  styleUrl: './characters-list-item-preview.component.scss',
  animations: [
    trigger('animationFavorite', [
      state('favoriteThisItem', style({
        transform: 'scale(2)',
        top: '-30px'
      })),

      transition('* => favoriteThisItem', [
        animate('1s', keyframes([
          style({
            display: 'block',
            opacity: '0',
            marginTop: '0',
            zIndex: '2'
          }),
          style({
            opacity: '1',
            marginTop: '-10px',
          }),
          style({
            opacity: '0',
            marginTop: '-20px',
          }),
          style({
            display: 'none',
            zIndex: '-1'
          })
        ]))
      ])
    ])
  ]
})

export class CharactersListItemPreviewComponent {
  @Input() public character: any;
  #charactersService = inject(CharactersService);
  public animateFavorite = signal('');
  readonly dialog = inject(MatDialog)

  public addFavorite(character: Character): void {
    this.#charactersService.addFavorite(character);
    this.animateFavorite.set('favoriteThisItem');
  }

  public removeFavorite(character: Character): void {
    this.#charactersService.removeFavorite(character);
    this.animateFavorite.set('');
  }


  openDialog(character: Character): void {
    this.dialog.open(CharactersListItemComponent, {
      data: character,
    });
  }

}
