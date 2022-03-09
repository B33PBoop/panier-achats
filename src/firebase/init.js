import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './config';

// Initialiser Firebase
export const instanceFirebase = initializeApp(firebaseConfig);

// Initialiser Firestore
export const bdFirestore = getFirestore();