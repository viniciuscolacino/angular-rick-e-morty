import { Component, Input, OnInit, inject } from '@angular/core';
import { CharactersService } from '@services/characters.service';
import { NgOptimizedImage } from '@angular/common';
import { combineLatest } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-characters-list-item-preview',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule],
  templateUrl: './characters-list-item-preview.component.html',
  styleUrl: './characters-list-item-preview.component.scss'
})
export class CharactersListItemPreviewComponent {
  @Input() public character: any;
  #charactersService = inject(CharactersService);

  public addToFavorites(): void {
    alert('clicou');
  }
}
