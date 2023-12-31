import { Component, OnInit, ViewChild } from '@angular/core';
import { IonNav, IonicModule, RefresherCustomEvent } from '@ionic/angular';
import { GalleryService } from '../shared/camera/gallery.service';
import { GalleryImageOptions, GalleryPhoto } from '@capacitor/camera';
import { CommonModule } from '@angular/common';
import { MenuService } from '../services/menu/menu.service';
import { Title } from '@angular/platform-browser';
import { FirestoreDocumentMapping } from '../services/firebase/firebase.models';
import { IMenu, IMenuWrapper, IRecipe, MenuWrapper } from '../services/menu/menu.models';
import { ConfigurationService } from '../shared/_configuration/configuration.service';
import { RecipeDetailsPage } from './recipe-details/recipe-details.page';
import { MenuState } from '../services/menu/menu.state';
import { map } from 'rxjs/operators';
import { BaseComponent } from '../shared/base.component';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";
import { Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';

@AutoUnsubscribe({ arrayName: 'subscriptions' })
@Component({
  selector: 'app-menu-categories',
  templateUrl: 'menu-categories.page.html',
  styleUrls: ['menu-categories.page.scss'],
  standalone: true,
  providers: [MenuService, ConfigurationService],
  imports: [IonicModule, CommonModule],
})
export class MenuCategoriesPage extends BaseComponent implements OnInit {
  recipeDetailsComponent = RecipeDetailsPage;
  @ViewChild('nav') recipeDetails!: IonNav;
  menus: FirestoreDocumentMapping<MenuWrapper>[] = [];
  menu: MenuWrapper | undefined = undefined;
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

    this.route.paramMap.pipe(map(params => params.get('id'))).subscribe((id) => {
      this.service.setSelectedMenuId(id ?? undefined);
    });
  }


  async refresh($event: any): Promise<void> {
    // await this.load();
    await $event.target.complete();
  }

  private async load() {
    this.subscriptions.push(
      this.store.select(MenuState.selectedMenuSelector).subscribe(menu => {
        this.menu = menu;
        this.setPageName(this.menu?.name);
      }),
    );
  }

  selectMenu(menu: FirestoreDocumentMapping<IMenuWrapper>, $event?: Event) {
    this.router.navigate(['menus', menu.id], {});
    // this.service.selectMenu(menu);
  }

  selectRecipe(recipe: FirestoreDocumentMapping<IRecipe>, $event?: Event) {
    const menuId = this.route.snapshot.paramMap.get('id');
    if (menuId == undefined) {
      this.router.navigate(['recipes', recipe.id], {});
    } else {
      this.router.navigate(['menus', menuId, 'recipes', recipe.id], {});
    }
    this.recipeDetails
  }
}
