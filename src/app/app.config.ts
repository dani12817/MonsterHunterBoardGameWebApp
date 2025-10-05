import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(withFetch()),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json'
      })
    }),
  ]
};

const firebaseConfig = {
  apiKey: "AIzaSyA1lDHnUFZYjLKl8YUYE1wKAMzd1_4YamM",
  authDomain: "monsterhunterboardgamewebapp.firebaseapp.com",
  projectId: "monsterhunterboardgamewebapp",
  storageBucket: "monsterhunterboardgamewebapp.firebasestorage.app",
  messagingSenderId: "763933396915",
  appId: "1:763933396915:web:c25b441c6d442765a245c6",
  measurementId: "G-91CJX0PP6C"
};