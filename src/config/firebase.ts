// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF9tCKp-Z3br2npQHxnp8JB87y1l4fShY",
  authDomain: "voting-d9597.firebaseapp.com",
  projectId: "voting-d9597",
  storageBucket: "voting-d9597.firebasestorage.app",
  messagingSenderId: "523142592755",
  appId: "1:523142592755:web:62461cf5dcc69adc089f86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
