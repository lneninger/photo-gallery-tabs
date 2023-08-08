import { Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToContacts = () => redirectLoggedInTo(['contacts']);

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'actions',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
    canActivate: [AuthGuard], data: { authGuardPipe: redirectLoggedInToContacts },
  },
  {
    path: 'logout',
    loadComponent: () => import('./logout/logout.page').then((m) => m.LogoutPage),
    canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'contacts',
    pathMatch: 'full',
    loadComponent: () => import('./contacts/contacts.page').then((m) => m.ContactsPage),
    canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'contacts/:id',
    loadComponent: () => import('./contact/contact.page').then((m) => m.ContactPage),
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
