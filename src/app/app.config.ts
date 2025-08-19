import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({
      projectId: "monsterhunterboardgamewebapp",
      appId: "1:763933396915:web:3e5742d25361afe9a245c6",
      storageBucket: "monsterhunterboardgamewebapp.firebasestorage.app",
      apiKey: "AIzaSyA1lDHnUFZYjLKl8YUYE1wKAMzd1_4YamM",
      authDomain: "monsterhunterboardgamewebapp.firebaseapp.com",
      messagingSenderId: "763933396915",
      measurementId: "G-RWBKGD4R9K"
    })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())]
};
