import { APP_INITIALIZER, EnvironmentProviders, Provider, enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CommonModule } from '@angular/common';


import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectFunctionsEmulator, getFunctions, provideFunctions } from '@angular/fire/functions';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';
import { Messaging } from 'firebase/messaging';
import { provideServiceWorker } from '@angular/service-worker';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppInitializer } from './app/app.initializer';
// import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
// import { getPerformance, providePerformance } from '@angular/fire/performance';
// import { getDatabase, provideDatabase } from '@angular/fire/database';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}


const extraProviders: Provider[] = [];
extraProviders.push(
{
  provide: APP_INITIALIZER,
  useFactory: (httpClient: HttpClient) => () => AppInitializer.initializeApp(httpClient),
  deps: [HttpClient],
  multi: true
});


bootstrapApplication(AppComponent, {
  providers: [
    // firebaseProviders,
    // importProvidersFrom(firebase),
  importProvidersFrom(HttpClientModule),
  importProvidersFrom(CommonModule),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.useEmulators) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    })),
    importProvidersFrom(provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      }
      return auth;
    })),
    importProvidersFrom(provideFunctions(() => {
      const functions = getFunctions();
      if (environment.useEmulators) {
        connectFunctionsEmulator(functions, 'localhost', 5001);
      }
      return functions;
    })),
    // importProvidersFrom(
    //   provideMessaging(() => {
    //     const messaging = getMessaging();
    //     if (environment.useEmulators) {
    //       connectMessagingEmulator(messaging, 'localhost', 8080);
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    ...extraProviders,
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
});
function connectMessagingEmulator(messaging: Messaging, arg1: string, arg2: number) {
  throw new Error('Function not implemented.');
}

