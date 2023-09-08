import { EnvironmentProviders, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxsDataPluginModule } from '@angular-ru/ngxs';
import { NGXS_DATA_STORAGE_CONTAINER, NGXS_DATA_STORAGE_EXTENSION } from '@angular-ru/ngxs/storage';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { MenuState } from './app/services/menu/menu.state';

export const ngxsProviders: EnvironmentProviders[] = [
  importProvidersFrom(
    NgxsModule.forRoot([MenuState], {
      developmentMode: !environment.production,
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false,
      }
    }),
    NgxsDataPluginModule.forRoot([NGXS_DATA_STORAGE_EXTENSION, NGXS_DATA_STORAGE_CONTAINER]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    HttpClientModule,
    CommonModule
  ),
];
