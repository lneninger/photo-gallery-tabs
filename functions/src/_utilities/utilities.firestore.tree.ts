import * as admin from 'firebase-admin';
import { CollectionReference, DocumentReference } from 'firebase-admin/firestore';


export const traverseFromRoot = async (onDocument: (doc: DocumentReference) => Promise<any>, onCollection: (coll: CollectionReference) => Promise<any>) => {
  const children = await admin.firestore().listCollections();
  const result: any = {};
  for (const child of children) {
    result[child.id] = await visit(child, onDocument, onCollection);
  }

  return result;
};

export const traverseFromPath = async (path: string, onDocument: (doc: DocumentReference) => Promise<any>, onCollection: (coll: CollectionReference) => Promise<any>) => {
  const countLevels = path.split('/').length;
  const isDocPath = countLevels % 2 === 0;
  const node = isDocPath ? admin.firestore().doc(path) : admin.firestore().collection(path);
  return await visit(node, onDocument, onCollection);
};

/**
 *Visit tree node
 * @param {any} node
 * @param {any} onDocument
 * @param {any} onCollection
 * @param {any} parent
 * @return {any} tree structure
 */
async function visit(node: any, onDocument: (doc: DocumentReference, parent: any) => Promise<any>, onCollection: (coll: CollectionReference, parent: any) => Promise<any>, parent?: any) {
  const isDocNode = typeof node.listCollections === 'function';

  const result = isDocNode ? await onDocument(node, parent) : await onCollection(node, parent);
  if (!result) return;
  const children = isDocNode ? await node.listCollections() : await node.listDocuments();
  for (const current of children) {
    await visit(current, onDocument, onCollection, result);
  }

  return result;
}
