// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN2d8Ov8rHt1uwh7l2kE__6cvbzt8m7XA",
  authDomain: "tele-med-7cc6e.firebaseapp.com",
  projectId: "tele-med-7cc6e",
  storageBucket: "tele-med-7cc6e.appspot.com",
  messagingSenderId: "505979095325",
  appId: "1:505979095325:web:3b0a218447526a5744f9f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
