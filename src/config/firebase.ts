// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUWw0CpEdQhq_ogQx3dgRcyYa9oquGTQ0",
  authDomain: "fir-social-media-project-1cfd0.firebaseapp.com",
  projectId: "fir-social-media-project-1cfd0",
  storageBucket: "fir-social-media-project-1cfd0.appspot.com",
  messagingSenderId: "648913420479",
  appId: "1:648913420479:web:cd8356fd30e3368f9f060a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();