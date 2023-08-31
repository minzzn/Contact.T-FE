// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { googleApiKey } from "./apiKey";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: googleApiKey,
  authDomain: "deceit-cat-44184.firebaseapp.com",
  projectId: "deceit-cat-44184",
  storageBucket: "deceit-cat-44184.appspot.com",
  messagingSenderId: "1062606458163",
  appId: "1:1062606458163:web:c756db5efaa86359664246",
  measurementId: "G-0QG9YNCDPV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
