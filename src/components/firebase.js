// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAIXRP93EWpdmKebBXqPbLb5AW5is4p2Ig",
  authDomain: "auth-with-firebase-22251.firebaseapp.com",
  projectId: "auth-with-firebase-22251",
  storageBucket: "auth-with-firebase-22251.appspot.com",
  messagingSenderId: "269177772612",
  appId: "1:269177772612:web:e906906cff699f3616ba11",
  measurementId: "G-T1FGTS59QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;