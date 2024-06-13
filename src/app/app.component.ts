import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <img src="assets/img/rick-and-morty-logo.svg">
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'Rick-e-Morty';
}
