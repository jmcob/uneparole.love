// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAOSzAed7cVr8lQU2NmJAfr432KyYyW0S8",

  authDomain: "une-parole.firebaseapp.com",

  projectId: "une-parole",

  storageBucket: "une-parole.appspot.com",

  messagingSenderId: "31289144640",

  appId: "1:31289144640:web:570d29ed82c5cba10a76a5",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
