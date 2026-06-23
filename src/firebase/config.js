// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqmBsNQf7VDYk_KFCpXh92B3i6gfRxvDs",
  authDomain: "naiki-3806c.firebaseapp.com",
  projectId: "naiki-3806c",
  storageBucket: "naiki-3806c.firebasestorage.app",
  messagingSenderId: "850153314193",
  appId: "1:850153314193:web:ae887f05692995aa736c30",
  measurementId: "G-EJ0Q0LC9Z0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
