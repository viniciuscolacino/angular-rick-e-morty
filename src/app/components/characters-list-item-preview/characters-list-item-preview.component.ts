import { Component, Input, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Character } from 'app/core/models/character';
import { CharactersListItemComponent } from '@components/characters-list-item/characters-list-item.component';
import { MatDialog } from '@angular/material/dialog';
import { AvatarComponent } from '@shared/avatar/avatar.component';

@Component({
  selector: 'app-characters-list-item-preview',
  standalone: true,
  imports: [
    AvatarComponent,
    CharactersListItemComponent,
    FontAwesomeModule,
    NgOptimizedImage,
  ],
  templateUrl: './characters-list-item-preview.component.html',
  styleUrl: './characters-list-item-preview.component.scss',
})

export class CharactersListItemPreviewComponent {
  @Input() public character: any;
  public animateFavorite = signal('');
  readonly dialog = inject(MatDialog);
  public cssHover = false;


  openDialog(character: Character): void {
    this.dialog.open(CharactersListItemComponent, {
      data: character,
    });
  }

}
