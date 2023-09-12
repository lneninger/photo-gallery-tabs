import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { GalleryService } from '../../shared/camera/gallery.service';
import { GalleryImageOptions, GalleryPhoto } from '@capacitor/camera';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu/menu.service';
import { Title } from '@angular/platform-browser';
import { FirestoreDocumentMapping } from '../../services/firebase/firebase.models';
import { IMenu, MenuWrapper, Recipe } from '../../services/menu/menu.models';
import { ConfigurationService } from '../../shared/_configuration/configuration.service';
import { Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/base.component';
import { map } from 'rxjs/operators';
import { MenuState } from 'src/app/services/menu/menu.state';

@Component({
  selector: 'app-recipe-details',
  templateUrl: 'recipe-details.page.html',
  styleUrls: ['recipe-details.page.scss'],
  standalone: true,
  providers: [MenuService, ConfigurationService],
  imports: [IonicModule, CommonModule],
})
export class RecipeDetailsPage extends BaseComponent implements OnInit {
  recipe: Recipe | undefined = undefined;

  constructor(
    private store: Store,
    private titleService: Title,
    private service: MenuService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
    this.setPageName();
  }
  setPageName(name?: string) {
    this.titleService.setTitle(name ?? 'Menu Categories');
  }
  ngOnInit(): void {
    this.load();

    this.route.paramMap.pipe(map(params => ({ menuId: params.get('menuId') || undefined, recipeId: params.get('id') || undefined }))).subscribe((data) => {
      const currentMenuId = this.store.selectSnapshot(MenuState.selectedMenuIdSelector);
      if (currentMenuId != data.menuId) {
        this.service.setSelectedMenuId(data.menuId);
      }
      this.service.setSelectedRecipeId(data.recipeId);
    });
  }

  private async load() {
    this.subscriptions.push(
      this.store.select(MenuState.selectedRecipeSelector).subscribe(recipe => {
        this.recipe = recipe;
        this.setPageName(this.recipe?.name);
      }),
    );
  }
}
