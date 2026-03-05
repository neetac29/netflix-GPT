// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAILibNx79D_pREBtiaI9DyiB03uhkC3nQ",
  authDomain: "netflixgpt-fe0f0.firebaseapp.com",
  projectId: "netflixgpt-fe0f0",
  storageBucket: "netflixgpt-fe0f0.firebasestorage.app",
  messagingSenderId: "470510573237",
  appId: "1:470510573237:web:6122b8efb2cad09a1e50fc",
  measurementId: "G-4DNEWM5T2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
