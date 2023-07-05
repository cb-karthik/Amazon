// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDEYO50S9_kVB0gngliyz5A_nNn8H54wE4",
  authDomain: "clone-228a7.firebaseapp.com",
  projectId: "clone-228a7",
  storageBucket: "clone-228a7.appspot.com",
  messagingSenderId: "624420397335",
  appId: "1:624420397335:web:065e83b573ee17e219d752",
  measurementId: "G-QPYL7X6T12"
};

initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const db = getFirestore();