import { Selector, SelectorOptions, State, Store } from '@ngxs/store';
import { Computed, DataAction, Payload, StateRepository } from '@angular-ru/ngxs/decorators';
import { NgxsDataRepository } from '@angular-ru/ngxs/repositories';
import { Injectable } from '@angular/core';
import { FirestoreDocumentMapping } from '../firebase/firebase.models';
import { IMenu, IMenuWrapper, MenuWrapper } from './menu.models';
import { AppInitializer } from 'src/app/app.initializer';

export interface IMenuStateModel {
  menus?: FirestoreDocumentMapping<IMenuWrapper>[] | undefined;
  selectedMenuId?: string | undefined;
}

@StateRepository()
@State<IMenuStateModel>({
  name: 'menuState',
  defaults: {
  }
})
@Injectable()
export class MenuState extends NgxsDataRepository<IMenuStateModel> {

  @Selector() static menusSelector(state: IMenuStateModel) {
    return state.menus;
  }
  @Selector() static selectedMenuIdSelector(state: IMenuStateModel) {
    return state.selectedMenuId;
  }

  @Selector([MenuState.selectedMenuIdSelector, MenuState.menusSelector]) static selectedMenuSelector(menuId: string, menus: FirestoreDocumentMapping<IMenuWrapper>[] | undefined) {
    if (menuId) {
      const menu = MenuState.retrieveSelectedMenu(menuId, menus);
      return new MenuWrapper(menu?.data as IMenu);
    } else {
      return new MenuWrapper({
        name: 'Menu Categories',
        images: [],
        subcategories: menus?.map(menu => ({ ...menu, data: new MenuWrapper(menu.data as IMenu) })) ?? [],
      });
    }
  }

  get menus() {
    return this.getState().menus;
  }

  get menus$() {
    return this.store.select(MenuState.menusSelector);
  }

  get selectedMenuId() {
    return this.store.selectSnapshot(MenuState.selectedMenuIdSelector);
  }

  get selectedMenuId$() {
    return this.store.select(MenuState.selectedMenuIdSelector);
  }

  get selectedMenu() {
    return this.store.selectSnapshot(MenuState.selectedMenuSelector);
  }

  get selectedMenu$() {
    return this.store.select(MenuState.selectedMenuSelector);
  }

  constructor(private store: Store) {
    super();
  }

  override ngxsAfterBootstrap() {
    super.ngxsAfterBootstrap();
    this.setMenus(AppInitializer.data?.menus);
  }

  @DataAction() setMenus(@Payload('menus') menus: FirestoreDocumentMapping<IMenuWrapper>[]) {
    this.ctx.setState((state) => ({ ...state, menus }));
  }
  @DataAction() setSelectedMenuId(@Payload('id') id: string | undefined) {
    this.ctx.setState((state) => ({ ...state, selectedMenuId: id }));
  }


  private static  retrieveSelectedMenu(menuId: string, menus: FirestoreDocumentMapping<IMenuWrapper>[] | undefined): FirestoreDocumentMapping<IMenuWrapper> | undefined {

    for (const menu of menus || []) {
      if (menu.id === menuId) {
        return menu;
      } else if (!!menu.data?.subcategories?.length) {
        const result = MenuState.retrieveSelectedMenu(menuId, menu.data?.subcategories);
        if (result) {
          return result;
        }
      }
    }

    return undefined;
  }
}
