// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0x83gNLgDVXjnyuQhErKmWZNb1nwFN4E",
  authDomain: "fridakala-58cf8.firebaseapp.com",
  projectId: "fridakala-58cf8",
  storageBucket: "fridakala-58cf8.appspot.com",
  messagingSenderId: "585014000919",
  appId: "1:585014000919:web:74bae6d82f12920e26cb52",
  measurementId: "G-VSHY1V73JV"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;