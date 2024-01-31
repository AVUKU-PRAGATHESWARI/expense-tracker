// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBUKS-GCX7kr1jWKoabycvmFg9O6KJ7RWc",
  authDomain: "expense-tracker-a87e1.firebaseapp.com",
  projectId: "expense-tracker-a87e1",
  storageBucket: "expense-tracker-a87e1.appspot.com",
  messagingSenderId: "141719399528",
  appId: "1:141719399528:web:a6f62972a138745a5c9fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


// firebase login
// firebase init 
// firebase deploy 