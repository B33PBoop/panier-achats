import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './config';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Initialiser Firebase
export const instanceFirebase = initializeApp(firebaseConfig);

//Initialiser Firebase Authentication
export const authFirebase = getAuth();

//Authentification fédérée par Google
export const authGoogle = new GoogleAuthProvider();

// Initialiser Firestore
export const bdFirestore = getFirestore();