import { Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToActions = () => redirectLoggedInTo(['actions']);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'actions',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
    canActivate: [AuthGuard], data: { authGuardPipe: redirectLoggedInToActions },
  },
  {
    path: 'logout',
    loadComponent: () => import('./logout/logout.page').then((m) => m.LogoutPage),
    canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'actions',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: '**',
    redirectTo: 'actions',
  },
];
