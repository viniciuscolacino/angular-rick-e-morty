import { Component, Input, OnInit, inject } from '@angular/core';
import { CharactersService } from '@services/characters.service';
import { NgOptimizedImage } from '@angular/common';
import { combineLatest } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Character } from 'app/core/models/character';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '@shared/modal/modal.component';

@Component({
  selector: 'app-characters-list-item-preview',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, ModalComponent],
  templateUrl: './characters-list-item-preview.component.html',
  styleUrl: './characters-list-item-preview.component.scss'
})

export class CharactersListItemPreviewComponent {
  @Input() public character: any;
  #charactersService = inject(CharactersService);
  #modalService = inject(NgbModal);

  public addFavorite(character: Character): void {
    this.#charactersService.addFavorite(character);
  }

  public removeFavorite(character: Character): void {
    this.#charactersService.removeFavorite(character);
  }

  private opcoesModal: NgbModalOptions = {
    backdrop: 'static',
    centered: true,
    backdropClass: 'backdrop-modal',
  }


  openModal(character: Character) {
    const modal = this.#modalService.open(ModalComponent);
    modal.componentInstance.data = character;
  }


}
