import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home',
    loadComponent: () =>
      import('./home/home.component'),
  },

  { path: 'films', loadComponent: () =>
    import('./films/films.component')
  },

  { path: 'about', loadComponent: () =>
    import('./about/about.component')
  },

  { path: '*', redirectTo: 'home' },
];
