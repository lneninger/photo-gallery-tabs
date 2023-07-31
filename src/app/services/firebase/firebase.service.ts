// import { Analytics, getAnalytics } from "firebase/analytics";
import { Injectable, inject } from '@angular/core';
// import { environment } from 'src/environments/environment';

import { FirebaseApp } from '@angular/fire/app';

import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { getMessaging, Messaging, onMessage } from "firebase/messaging";


@Injectable({ providedIn: 'root' })
export class FirebaseService {
  readonly auth: Auth;
  readonly firestore: Firestore;
  messaging: Messaging;

  constructor(
    public readonly app: FirebaseApp,
    // public readonly auth: AngularFireAuth,
    // public readonly storage: AngularFireStorage,

  ) {
    this.auth = inject(Auth);
    this.firestore = inject(Firestore);
    this.messaging = getMessaging(app);

    this.initializeListeners();
  }
  initializeListeners() {
    debugger
    onMessage(this.messaging, (payload) => {
      debugger;
      console.log('Message received. ', payload);
      // ...
    });
  }



}
