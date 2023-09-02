import { Injectable } from '@angular/core';
import { AppInitializer } from 'src/app/app.initializer';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  get menus() {
    return AppInitializer.data?.menus;
  }

  constructor() { }
}
