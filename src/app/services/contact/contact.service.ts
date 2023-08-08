import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from '../firebase/firebase.service';
import { collectionGroup, collection, collectionData, getDocs, deleteDoc } from '@angular/fire/firestore';
import { AuthService } from '../firebase/auth/auth.service';
import { ContactPayload } from '@capacitor-community/contacts';
import { addDoc, doc, setDoc } from "firebase/firestore";
import { IAppContact } from './contact.models';
import { FirestoreDocumentMapping } from '../firebase/firebase.models';


@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private firestoreService: FirebaseService, private authService: AuthService) { }

  async getContacts(): Promise<FirestoreDocumentMapping<IAppContact>[]> {
    if (this.authService.user?.uid) {
      const itemCollection = collection(this.firestoreService.firestore, `users/${this.authService.user.uid}/contacts`);
      const querySnapshot = await getDocs(itemCollection);

      // debugger;
      return querySnapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() as IAppContact, $original: doc } as FirestoreDocumentMapping<IAppContact>;
      });
    } else {
      return [];
    }
  }

  /**
   * Add a contact to the current user
   */
  async addContact(contact: IAppContact) {
    if (this.authService.user?.uid) {
      const itemCollection = collection(this.firestoreService.firestore, `users/${this.authService.user.uid}/contacts`);
      await addDoc(itemCollection, contact);
    } else {
    }
  }

  async deleteContact(contactId: string) {
    if (this.authService.user?.uid) {
      await deleteDoc(doc(this.firestoreService.firestore, `users/${this.authService.user.uid}/contacts`, contactId));
    } else {
    }
  }

}
