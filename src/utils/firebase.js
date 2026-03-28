// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx5yRjBSvRJS7N1q3lCKqXw4umC2A6nww",
  authDomain: "zecker-d3baa.firebaseapp.com",
  projectId: "zecker-d3baa",
  storageBucket: "zecker-d3baa.firebasestorage.app",
  messagingSenderId: "975267762801",
  appId: "1:975267762801:web:9fe387e01d204af17801d0",
  measurementId: "G-PZFJ55G9FK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
