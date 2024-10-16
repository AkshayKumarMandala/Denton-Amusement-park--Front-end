// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWftG3TyL1KR2CT0bonhb5F3_wHq2FytY",
  authDomain: "denton-amusement-fcf20.firebaseapp.com",
  projectId: "denton-amusement-fcf20",
  storageBucket: "denton-amusement-fcf20.appspot.com",
  messagingSenderId: "848927585290",
  appId: "1:848927585290:web:34e748a71177439e299bf3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth };
