// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {initializeApp} from "firebase/app";


export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyAsOBFJz5ynJI9WTk7jK4pwoVZixCM2qh8",
    authDomain: "room-meeting-management.firebaseapp.com",
    projectId: "room-meeting-management",
    databaseURL: "https://room-meeting-management-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "room-meeting-management.appspot.com",
    messagingSenderId: "554191587700",
    appId: "1:554191587700:web:1424f77b6006266f988421",
    measurementId: "G-7NX4GLDW0K"
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
