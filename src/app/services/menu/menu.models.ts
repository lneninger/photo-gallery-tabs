import { FirestoreDocumentMapping } from '../firebase/firebase.models';

export interface IMenuWrapper {
  name: string | undefined;
  images: FirestoreDocumentMapping<IMenuImage>[] | undefined;
  subcategories: FirestoreDocumentMapping<IMenuWrapper>[] | undefined;
  recipes?: FirestoreDocumentMapping<IRecipe>[] | undefined;
  $thumbnail?: FirestoreDocumentMapping<IMenuImage> | undefined;
}

export class MenuWrapper implements IMenuWrapper {
  name: string | undefined;
  images: FirestoreDocumentMapping<IMenuImage>[] | undefined;
  subcategories: FirestoreDocumentMapping<IMenuWrapper>[] | undefined;
  recipes?: FirestoreDocumentMapping<IRecipe>[] | undefined;

  get $thumbnail() {
    return this.images?.find(image => image.data.type == MenuImageType.thumbnail);
  }
  constructor(input: Partial<IMenuWrapper>) {
    Object.assign(this, input);
    this.subcategories = this.subcategories?.map(subcategory => ({ ...subcategory, data: new MenuWrapper(subcategory.data as IMenuWrapper) }));
    this.recipes = this.recipes?.map(recipe => ({ ...recipe, data: new Recipe(recipe.data as IRecipe) }));
  }
}


export interface IMenu extends IMenuWrapper {
}


export interface IRecipe {
  name: string | undefined;
  description: string | undefined;
  toppings: FirestoreDocumentMapping<IRecipeToppingReference>[] | undefined;

  toppings$: FirestoreDocumentMapping<RecipeTopping>[] | undefined;
  // toppings$: FirestoreDocumentMapping<RecipeTopping>[] | undefined;
  images: FirestoreDocumentMapping<IMenuImage>[] | undefined;
  sizes: IRecipeSize[] | undefined;
  $thumbnail?: FirestoreDocumentMapping<IMenuImage> | undefined;
}

export class Recipe implements IRecipe {
  name: string | undefined;
  description: string | undefined;
  toppings: FirestoreDocumentMapping<IRecipeToppingReference>[] | undefined;
  toppings$: FirestoreDocumentMapping<RecipeTopping>[] | undefined;
  sizes: IRecipeSize[] | undefined;
  images: FirestoreDocumentMapping<IMenuImage>[] | undefined;
  get $thumbnail() {
    return this.images?.find(image => image.data.type == MenuImageType.thumbnail) ?? this.images?.[0];
  }
  constructor(input: Partial<IRecipe>, toppings?: FirestoreDocumentMapping<IRecipeTopping>[]) {
    Object.assign(this, { ...input });
    if (toppings) {
      // this.$toppings = this.toppings?.map(topping => ({...topping, data: new RecipeTopping(topping.data as IRecipeTopping, toppings)}));
      this.toppings$ = this.toppings?.map(topping => {
        const match = toppings.find(lkp => lkp.data.name == topping.data.name);
        if (match) {
          return ({ ...match, data: new RecipeTopping(match.data as IRecipeTopping) });
        };

        return undefined;
      }).filter(item => item != undefined) as FirestoreDocumentMapping<RecipeTopping>[];
    }
  }
}




export interface IRecipeToppingReference {

  name: string | undefined;
}

export interface IRecipeTopping {

  name: string | undefined;
  images: FirestoreDocumentMapping<IMenuImage>[] | undefined;
  options: FirestoreDocumentMapping<IRecipeToppingOption>[] | undefined;
}

export class RecipeTopping implements IRecipeTopping {
  name: string | undefined;
  images: FirestoreDocumentMapping<IMenuImage>[] | undefined;
  options: FirestoreDocumentMapping<IRecipeToppingOption>[] | undefined;

  get $thumbnail() {
    return this.images?.find(image => image.data.type == MenuImageType.thumbnail) ?? this.images?.[0];
  }
  constructor(input: Partial<IRecipeTopping>) {
    Object.assign(this, input);
  }
}

export interface IRecipeToppingOption {
  name: string | undefined;
}

export interface IRecipeSize {
  name: string;
  description: string;
}

export interface IMenuImage {
  url: string;
  type: MenuImageType;
  size: MenuImageSize;
}

export enum MenuImageType {
  thumbnail = 'thumbnail',
  normal = 'normal'
}

export declare type MenuImageSize = MenuImageSizeType | string;

export enum MenuImageSizeType {
  size3232 = '32x32',
  size6464 = '64x64',
  size9696 = '96x96',
  size128128 = '128x128',
}
