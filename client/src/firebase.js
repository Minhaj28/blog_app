// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-5fc4a.firebaseapp.com",
  projectId: "blog-app-5fc4a",
  storageBucket: "blog-app-5fc4a.appspot.com",
  messagingSenderId: "778010087542",
  appId: "1:778010087542:web:2f4c613586b81d0a6f4f57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
