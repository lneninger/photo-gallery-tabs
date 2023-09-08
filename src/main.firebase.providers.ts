import { EnvironmentProviders } from '@angular/core';
import { importProvidersFrom } from '@angular/core';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from './environments/environment';

export const firebaseProviders: EnvironmentProviders[] = [
  importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.useEmulators) {
        connectFirestoreEmulator(firestore, '192.168.0.198', 8080);
      }
      return firestore;
    })),
    importProvidersFrom(provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://192.168.0.198:9099', { disableWarnings: true });
      }
      return auth;
    })),
    importProvidersFrom(provideFunctions(() => {
      const functions = getFunctions();
      if (environment.useEmulators) {
        connectFunctionsEmulator(functions, '192.168.0.198', 5001);
      }
      return functions;
    })),
    // importProvidersFrom(
    //   provideMessaging(() => {
    //     const messaging = getMessaging();
    //     if (environment.useEmulators) {
    //       connectMessagingEmulator(messaging, '192.168.0.198', 8080);
    //     }
    //     return messaging;
    //   })
    // ),
    importProvidersFrom(provideRemoteConfig(() => getRemoteConfig())),
    importProvidersFrom(provideStorage(() => {
      const storage = getStorage();
      if (environment.useEmulators) {
        connectStorageEmulator(storage, 'localhost', 9199);
      }
      return storage;
    })),
];
