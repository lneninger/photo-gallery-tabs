// import { Analytics, getAnalytics } from "firebase/analytics";
import { Injectable, inject } from '@angular/core';
// import { environment } from 'src/environments/environment';

import { FirebaseApp } from '@angular/fire/app';

import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Functions } from '@angular/fire/functions';
import { getMessaging, getToken, Messaging, onMessage, isSupported } from "firebase/messaging";
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class FirebaseService {
  readonly auth: Auth;
  readonly firestore: Firestore;
  messaging: Messaging | undefined;
  fns: Functions;

  constructor(
    public readonly app: FirebaseApp,
    // public readonly auth: AngularFireAuth,
    // public readonly storage: AngularFireStorage,

  ) {
    this.auth = inject(Auth);
    this.firestore = inject(Firestore);
    this.fns = inject(Functions);


    isSupported().then(supported => {
      if (supported) {
        this.messaging = getMessaging(app);
        this.initializeListeners();
      }
    });
  }

  /**
   * Initialize listeners for messaging service
   */
  initializeListeners() {

    if (this.messaging) {
      getToken(this.messaging, { vapidKey: environment.firebase.vapidKey }).then(
        (currentToken) => {
          if (currentToken) {
            console.log("Hurraaa!!! we got the token.....");
            console.log(currentToken);
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });

      this.requestNotificationPermission();

      this.initializeMessageListeners();
    }
  }
  initializeMessageListeners() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      debugger;
      console.log('Message received. ', payload);

      // ...
    });
  }

  requestNotificationPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');

      }
    });
  }

}
