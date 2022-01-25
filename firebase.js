// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr4VcFyCZYEJTGUzYrsKhiA-1UL_fdOAE",
  authDomain: "instagram-clone-dfc5b.firebaseapp.com",
  projectId: "instagram-clone-dfc5b",
  storageBucket: "instagram-clone-dfc5b.appspot.com",
  messagingSenderId: "810548064408",
  appId: "1:810548064408:web:e2461acee63b7acacee0ed",
  measurementId: "G-ZJKSZV1HRG"
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };