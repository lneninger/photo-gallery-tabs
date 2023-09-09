import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { GalleryService } from '../../shared/camera/gallery.service';
import { GalleryImageOptions, GalleryPhoto } from '@capacitor/camera';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu/menu.service';
import { Title } from '@angular/platform-browser';
import { FirestoreDocumentMapping } from '../../services/firebase/firebase.models';
import { IMenu, MenuWrapper } from '../../services/menu/menu.models';
import { ConfigurationService } from '../../shared/_configuration/configuration.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: 'recipe-details.page.html',
  styleUrls: ['recipe-details.page.scss'],
  standalone: true,
  providers: [MenuService, ConfigurationService],
  imports: [IonicModule, CommonModule],
})
export class RecipeDetailsPage implements OnInit {
  @Input() menus: FirestoreDocumentMapping<MenuWrapper>[] = [];
  constructor(private service: MenuService, titleService: Title, private configurationService: ConfigurationService) {
    titleService.setTitle('Menu Categories');
  }
  ngOnInit(): void {
  }



}
