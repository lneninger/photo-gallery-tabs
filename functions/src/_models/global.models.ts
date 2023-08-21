import { DocumentData } from 'firebase-admin/firestore';

export interface IModelWrapper<T> {
  original: T;
}

export interface IObject {
  [key: string]: unknown;
}


export interface FirestoreDocumentMapping<T> {
  id: string;
  data: T;
  $original?: DocumentData
}
