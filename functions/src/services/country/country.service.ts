import * as admin from 'firebase-admin';

/**
 * Contact service
 */
export class CountryService {
  /**
   *
   * @param {IAppDbContact} data contact created
   */
  async getUS() {
    let result: any;
    const node = admin.firestore().collection('countries').doc('usa');
    const nodeData = await node.get();
    if (nodeData.exists) {
      result = nodeData.data();
    } else {
      const externalRes = await fetch('https://restcountries.com/v3.1/name/united%20states?fullText=true');
      result = await externalRes.json();
      node.set(result[0]);
    }

    return result;
  }
}
