import { IMenuWrapper, IRecipeTopping } from 'src/app/services/menu/menu.models';
import { ICountry } from '../country/country.models';
import { FirestoreDocumentMapping } from 'src/app/services/firebase/firebase.models';

export interface IInitializerModel {
  menus: FirestoreDocumentMapping<IMenuWrapper>[];
  toppings: FirestoreDocumentMapping<IRecipeTopping>[];
  countryCodes: ICountry[];
}
