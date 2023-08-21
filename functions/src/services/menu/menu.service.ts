import { CollectionReference, DocumentReference } from 'firebase-admin/firestore';
import { logFire } from '../../_decorators/log.firebase';
import { FirestoreDocumentMapping } from '../../_models/global.models';
import { traverseFromPath } from '../../_utilities/utilities.firestore.tree';

/**
 * Contact service
 */
export class MenuService {
  /**
   *
   * @param {IAppDbContact} data contact created
   */
  @logFire('onGetMenu')
  async getMenu() {
    // document evaluator
    const onDocument = async (node: DocumentReference, parent?: any) => {
      const document = { id: node.id, data: (await node.get()).data() } as FirestoreDocumentMapping<any>;
      if (parent && Array.isArray(parent)) {
        (parent as FirestoreDocumentMapping<any>[]).push(document);
        return document;
      }

      return null;
    };

    const onCollection = async (node: CollectionReference, parent?: any) => {
      const typedParent = parent as FirestoreDocumentMapping<any>;

      let result: any[] = typedParent?.data[node.id];

      if (!result) {
        result = [];
        if (typedParent) {
          typedParent.data[node.id] = result;
        }
      }

      return result;
    };

    return traverseFromPath('menus', onDocument, onCollection);
  }
}
