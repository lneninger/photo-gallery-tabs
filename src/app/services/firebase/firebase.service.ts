// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Firestore, getFirestore } from '@angular/fire/firestore';
import { Auth, getAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';

@Injectable({providedIn: 'root'})
export class FirebaseService{

  readonly firestore: Firestore;
  readonly auth: Auth;
  readonly app: FirebaseApp;
  readonly analytics: Analytics;
  constructor(){

    // Initialize Firebase
    this.app = initializeApp(environment.firebase);
    this.analytics = getAnalytics(this.app);
    this.firestore = getFirestore(this.app);
    this.auth = getAuth(this.app);
  }
}
