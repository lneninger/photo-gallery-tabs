import * as admin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { ICustomUserClaims } from './user.models';


/**
 * User service
 */
export class UserService {
  /**
   * Update user claims
   * @param {UserRecord} userRecord The user record to update
   * @param {ICustomUserClaims} claimsUpdate The claims to update
   * @return {Promise<ICustomUserClaims>} A promise that resolves when the claims are updated
   */
  async updateUserClaims(userRecord: UserRecord, claimsUpdate: ICustomUserClaims): Promise<ICustomUserClaims> {
    const auth = admin.auth();
    let claims = userRecord.customClaims || {};
    claims = { ...claims, ...claimsUpdate };
    await auth.setCustomUserClaims(userRecord.uid, claims);
    return claims;
  }
}
