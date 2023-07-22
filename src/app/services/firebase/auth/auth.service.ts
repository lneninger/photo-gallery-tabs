//reference @angular/fire/compat


import { Injectable } from '@angular/core';
import { } from '@angular/fire/compat/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from '../firebase.service';
import { IUser } from './auth.models';
import { UserCredential } from '@firebase/auth-types';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private firebaseService: FirebaseService,
    private afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {
  }

  async login(email: string, password: string): Promise<IUser> {
    const res = await this.afAuth.signInWithEmailAndPassword(email, password);
    return this.parse(res);
  }
  parse(res: UserCredential): IUser {
    return {} as IUser;
  }

}
