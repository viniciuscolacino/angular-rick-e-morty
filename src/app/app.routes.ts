import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Rick e Morty',
    loadComponent: () => import('@components/characters-list/characters-list.component'),
  }
];
