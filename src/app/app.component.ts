import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from "./shared/footer/footer.component";

// font awesome
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
  `,
  imports: [RouterOutlet, AsyncPipe, CommonModule, HeaderComponent, FontAwesomeModule, FooterComponent],
  host: { 'class': 'app-root' }
})

export class AppComponent {
  title = 'Rick-e-Morty';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
