import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'app/core/models/character';
import { DatePipe, NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgOptimizedImage, DatePipe, FontAwesomeModule, NgStyle, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})

export class ModalComponent implements OnInit {
  @Input() public data: any;


  ngOnInit(): void {
    this.createEpisodesNumbers();
    console.log(this.data);
  }

  createEpisodesNumbers() {
    this.data.episodeNumbers =
      this.data.episode.map((ep: string) => {
        const url = ep;
        const episodeNumber = url.split('/').pop();
        return episodeNumber;
      })
  }

  // //@ViewChild('focar') buttonPraFocar: ElementRef | ;
  constructor(public activeModal: NgbActiveModal) {


  }
  // ngAfterViewInit() {
  //   //this.buttonPraFocar.nativeElement.focus();
  // }
}
