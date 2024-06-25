import { Component, Input, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharactersService } from '@services/characters.service';
import { Character } from 'app/core/models/character';
import { NgOptimizedImage } from '@angular/common';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgOptimizedImage
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  host: {
    '[class.cssHover]': 'cssHover',
    '[class.borderRadius]': 'borderRadius'
  },
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

export class AvatarComponent {
  @Input() public character: any;
  @Input() public borderRadius: boolean = false;
  @Input() public cssHover: boolean = false;
  #charactersService = inject(CharactersService);
  public animateFavorite = signal('');

  public addFavorite(character: Character): void {
    this.#charactersService.addFavorite(character);
    this.animateFavorite.set('favoriteThisItem');
  }

  public removeFavorite(character: Character): void {
    this.#charactersService.removeFavorite(character);
    this.animateFavorite.set('');
  }
}
