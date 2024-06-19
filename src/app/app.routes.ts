import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Rick e Morty',
    loadComponent: () => import('@pages/characters-list-page/characters-list-page.component'),
  },

  {
    path: 'favoritos',
    title: 'Favoritos',
    loadComponent: () => import('@pages/characters-favorites-list-page/characters-favorites-list-page.component'),
  }
];
