import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { HttpClient, provideHttpClient } from "@angular/common/http";
import {provideTranslateService, TranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader, TranslateHttpLoader} from "@ngx-translate/http-loader";

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
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
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
