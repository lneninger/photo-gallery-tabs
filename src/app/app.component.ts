import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
})
export class AppComponent {

  get title(): string {
    return this.titleService.getTitle() as string;
  }
  menuItems: any[] = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Menus',
      url: '/menus',
      icon: 'grid-outline'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'person'
    },
    {
      title: 'Actions',
      url: '/actions',
      icon: 'list'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private titleService: Title
    ) {

  }
}


