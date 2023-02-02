
import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUlk61EERR1wYoqctUviIQ7AYtRHgq1NY",
  authDomain: "counter-b402f.firebaseapp.com",
  projectId: "counter-b402f",
  storageBucket: "counter-b402f.appspot.com",
  messagingSenderId: "796600871228",
  appId: "1:796600871228:web:2d846202f39430699f5639",
  measurementId: "G-HL9SSTT4H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getDatabase(app);
export default db;