import { IMenuStateModel } from 'src/app/services/menu/menu.state';

export interface AppStateModel {
  countries: Country[];
  menuState: IMenuStateModel;
}

export interface Country {
  name: string;
}
