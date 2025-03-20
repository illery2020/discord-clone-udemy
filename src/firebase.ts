// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt2HOC7nDtiPJ698gdiDeOSYrHbsefADY",
  authDomain: "discord-clone-udemy-ba0ba.firebaseapp.com",
  projectId: "discord-clone-udemy-ba0ba",
  storageBucket: "discord-clone-udemy-ba0ba.firebasestorage.app",
  messagingSenderId: "100147819211",
  appId: "1:100147819211:web:96d2980c51fe35a6e7e14e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
