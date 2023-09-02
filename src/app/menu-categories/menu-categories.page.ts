import { Component, OnInit } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { GalleryService } from '../shared/camera/gallery.service';
import { GalleryImageOptions, GalleryPhoto } from '@capacitor/camera';
import { CommonModule } from '@angular/common';
import { MenuService } from '../services/menu/menu.service';
import { Title } from '@angular/platform-browser';
import { FirestoreDocumentMapping } from '../services/firebase/firebase.models';
import { IMenu, MenuWrapper } from '../services/menu/menu.models';
import { ConfigurationService } from '../shared/_configuration/configuration.service';
import { MenuCategoryPage } from './menu-category/menu-category.page';

@Component({
  selector: 'app-menu-categories',
  templateUrl: 'menu-categories.page.html',
  styleUrls: ['menu-categories.page.scss'],
  standalone: true,
  providers: [MenuService, ConfigurationService],
  imports: [IonicModule, CommonModule],
})
export class MenuCategoriesPage implements OnInit {
  navComponent = MenuCategoryPage;
  menus: FirestoreDocumentMapping<MenuWrapper>[] = [];
  constructor(private service: MenuService, titleService: Title, private configurationService: ConfigurationService) {
    titleService.setTitle('Menu Categories');
  }
  ngOnInit(): void {
    this.load();
  }


  async refresh($event: any): Promise<void> {
    await this.load();
    await $event.target.complete();
  }

  private async load() {
    this.menus = this.configurationService.menus.map(menu => ({ ...menu, data: new MenuWrapper(menu.data as IMenu) }));
  }


}
