import { APP_INITIALIZER, EnvironmentProviders, Provider, enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CommonModule } from '@angular/common';


import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { provideServiceWorker } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { AppInitializer } from './app/app.initializer';

import { firebaseProviders } from './main.firebase.providers';
import { ngxsProviders } from './main.ngxs.providers';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (httpClient: HttpClient) => () => AppInitializer.initializeApp(httpClient),
      deps: [HttpClient],
      multi: true
    },

    ...ngxsProviders,
    ...firebaseProviders,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
});

