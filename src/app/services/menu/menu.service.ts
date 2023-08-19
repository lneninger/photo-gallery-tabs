import { Injectable } from '@angular/core';
import { collection, getDocs } from '@angular/fire/firestore';
import { FirestoreDocumentMapping } from '../firebase/firebase.models';
import { FirebaseService } from '../firebase/firebase.service';
import { IMenu, MenuWrapper } from './menu.models';


@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private firestoreService: FirebaseService) { }

  async getMenus() {
    const itemCollection = collection(this.firestoreService.firestore, 'menus');
    const querySnapshot = await getDocs(itemCollection);

    return querySnapshot.docs.map((doc) => {
      return { id: doc.id, data: new MenuWrapper(doc.data() as IMenu), $original: doc } as FirestoreDocumentMapping<MenuWrapper>;
    });
  }
}
