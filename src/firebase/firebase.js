// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Nfhlbuw5MfcwE_7eFCUnH9Ulw8989Yk",
  authDomain: "thewebpal-1bd6c.firebaseapp.com",
  projectId: "thewebpal-1bd6c",
  storageBucket: "thewebpal-1bd6c.firebasestorage.app",
  messagingSenderId: "656773154236",
  appId: "1:656773154236:web:b47e8f464042b4be2a97b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)