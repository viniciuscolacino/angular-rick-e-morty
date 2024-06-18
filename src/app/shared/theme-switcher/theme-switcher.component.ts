import { DOCUMENT } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgClass
  ],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})

export class ThemeSwitcherComponent implements OnInit {
  document = inject(DOCUMENT);

  currentDarkTheme = signal(true);
  classLightTheme: string = 'light-theme'
  classDarkTheme: string = 'dark-theme';

  ngOnInit(): void {
    this.document.body.classList.add(this.classDarkTheme);
  }

  onThemeChanged(darkMode: boolean) {
    if (darkMode) {
      this.document.body.classList.add(this.classDarkTheme);
      this.document.body.classList.remove(this.classLightTheme);
      this.currentDarkTheme.set(true);
    }
    else {
      this.document.body.classList.remove(this.classDarkTheme);
      this.document.body.classList.add(this.classLightTheme);
      this.currentDarkTheme.set(false);
    }
  }
}
