import { Component, OnInit } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { GalleryService } from '../shared/camera/gallery.service';
import { GalleryImageOptions, GalleryPhoto } from '@capacitor/camera';
import { CommonModule } from '@angular/common';
import { MenuService } from '../services/menu/menu.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-categories',
  templateUrl: 'menu-categories.page.html',
  styleUrls: ['menu-categories.page.scss'],
  standalone: true,
  providers: [MenuService],
  imports: [IonicModule, CommonModule],
})
export class SettingsPage implements OnInit {
  constructor(private service: MenuService, titleService: Title) {
    titleService.setTitle('Menu Categories');
  }
  ngOnInit(): void {

  }
}
