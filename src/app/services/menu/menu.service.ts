import { Injectable } from '@angular/core';
import { collection, getDocs } from '@angular/fire/firestore';
import { FirestoreDocumentMapping } from '../firebase/firebase.models';
import { FirebaseService } from '../firebase/firebase.service';
import { IMenu, IMenuWrapper, IRecipeTopping, MenuWrapper } from './menu.models';
import { ConfigurationService } from 'src/app/shared/_configuration/configuration.service';
import { MenuState } from './menu.state';
import { httpsCallable } from 'firebase/functions';
import { firstValueFrom } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MenuService {


  constructor(
    private configurationService: ConfigurationService,
    private service: FirebaseService,
    private state: MenuState
  ) { }

  async getMenus() {
    const fn = httpsCallable<any, { menus: FirestoreDocumentMapping<IMenuWrapper>[], toppings: FirestoreDocumentMapping<IRecipeTopping>[] }>(this.service.fns, 'getMenus');
    const data = await (await fn.call({})).data;
    this.state.setMenus(data.menus, data.toppings);
  }

  selectMenu(menu: FirestoreDocumentMapping<IMenuWrapper>) {
    this.state.setSelectedMenuId(menu.id);
  }

  setSelectedMenuId(id: string | undefined) {
    this.state.setSelectedMenuId(id);
  }

  setSelectedRecipeId(id: string | undefined) {
    this.state.setSelectedRecipeId(id);
  }

}
