// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDfBdsVqxQHrEZtvaxNNVKazQLX8bJiq8",
  authDomain: "repmind-29763.firebaseapp.com",
  projectId: "repmind-29763",
  storageBucket: "repmind-29763.firebasestorage.app",
  messagingSenderId: "480183966158",
  appId: "1:480183966158:web:8197177401c8145202b39f",
  measurementId: "G-RC4D80MGXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth};
