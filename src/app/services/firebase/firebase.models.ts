import { DocumentData } from 'firebase/firestore';

export interface FirestoreDocumentMapping<T> {
  id: string;
  data: T;
  $original: DocumentData
}
