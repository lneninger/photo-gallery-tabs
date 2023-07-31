import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from '../firebase/firebase.service';
import { collectionGroup, collection, collectionData, getDocs } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private firestoreService: FirebaseService) { }

  async getMenus() {
    const itemCollection = collection(this.firestoreService.firestore, 'menus');
    const querySnapshot = await getDocs(itemCollection);

    // debugger;
    return querySnapshot.docs.map((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // debugger
      return doc.data();
    });
  }
}
