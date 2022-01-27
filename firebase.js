// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyD6m8U0WqMcJHI2E33hdG1IiUb-W_DJzuI",
  authDomain: "insta-clone-8d21c.firebaseapp.com",
  projectId: "insta-clone-8d21c",
  storageBucket: "insta-clone-8d21c.appspot.com",
  messagingSenderId: "718262796990",
  appId: "1:718262796990:web:3eb1b3d9595686324714ef"
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };