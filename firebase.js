// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnDO5O7jc9jod42lbO7_6ZYvpInQLTUe0",
  authDomain: "emotorad-7d39e.firebaseapp.com",
  projectId: "emotorad-7d39e",
  storageBucket: "emotorad-7d39e.firebasestorage.app",
  messagingSenderId: "401441062420",
  appId: "1:401441062420:web:1399c025e4ce0d4fdfb101",
  measurementId: "G-C73M5J2Y1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
