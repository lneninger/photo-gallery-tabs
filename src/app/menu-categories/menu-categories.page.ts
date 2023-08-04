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
export class MenuCategoriesPage implements OnInit {
  pictures: GalleryPhoto[] = [];
  menus: any;
  constructor(private service: MenuService, titleService: Title) {
    titleService.setTitle('Menu Categories');
  }

  async ngOnInit(): Promise<void> {
    this.menus = await this.service.getMenus();
  }

  async refresh($event: any): Promise<void> {
    this.menus = await this.service.getMenus();
    await $event.target.complete();
  }
}
