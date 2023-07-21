import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'actions',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
