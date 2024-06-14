import { Component, Input, inject } from '@angular/core';
import { CharactersService } from '@services/characters.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-characters-list-item-preview',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './characters-list-item-preview.component.html',
  styleUrl: './characters-list-item-preview.component.scss'
})
export class CharactersListItemPreviewComponent {
  @Input() public character: any;
  #charactersService = inject(CharactersService);
}
