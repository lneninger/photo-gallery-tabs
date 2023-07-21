// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FirebaseService{
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCiXYXUJQD3RegKxAeYQJeCw9HeDDLSna4",
      authDomain: "ionic-app-f0da0.firebaseapp.com",
      projectId: "ionic-app-f0da0",
      storageBucket: "ionic-app-f0da0.appspot.com",
      messagingSenderId: "746502953102",
      appId: "1:746502953102:web:aad04235ca81808ddb91df",
      measurementId: "G-EK0MWTWNTT"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
