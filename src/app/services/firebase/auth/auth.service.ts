import { Injectable } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword, signOut, getAuth } from '@angular/fire/auth';
import { FirebaseService } from '../firebase.service';
import { IUser } from './auth.models';
import { FirebaseError } from 'firebase/app';

@Injectable({ providedIn: 'root' })
export class AuthService {

  authError: any | undefined;

  get user(): IUser | null {
    return getAuth().currentUser;
  }

  constructor(
    private firebaseService: FirebaseService,
  ) {
  }

  async login(email: string, password: string): Promise<IUser | undefined> {
    try {
      const res = await signInWithEmailAndPassword(this.firebaseService.auth, email, password);
      return this.parse(res);
    } catch (err: FirebaseError | any) {
      this.setError(err);
      throw err;
    }
  }

  async logout() {
    try {
      await signOut(this.firebaseService.auth);
    } catch (err: FirebaseError | any) {
      this.setError(err);
      throw err;
    }
  }
  setError(err: FirebaseError | any) {
    let error: string | undefined;
    if (err instanceof FirebaseError) {
      switch (err.code) {
        case 'auth/invalid-email':
          error = 'Invalid email address.';
          break;
        case 'auth/user-disabled':
          error = 'User disabled.';
          break;
        case 'auth/user-not-found':
          error = 'User not found.';
          break;
        case 'auth/wrong-password':
          error = 'Wrong password.';
          break;
        default:
          error = err.message;
          break;
      }
    }
    else if (err) {
      error = err.message;
    }

    this.authError = error;
  }
  parse(res: UserCredential): IUser {
    return {} as IUser;
  }

}
