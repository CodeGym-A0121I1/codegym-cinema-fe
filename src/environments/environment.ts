// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {initializeApp} from "firebase/app";


export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyC--yCMixAY8XXtgfVkSywXBMpwUQ45dcg",
    authDomain: "codegym-cinema.firebaseapp.com",
    projectId: "codegym-cinema",
    storageBucket: "codegym-cinema.appspot.com",
    messagingSenderId: "971870759010",
    appId: "1:971870759010:web:ae2b1ba6c9f5e5ccc1c93b"
  },
  apiBaseUrl: "http://localhost:8080/api"
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
