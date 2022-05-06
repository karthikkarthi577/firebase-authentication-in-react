import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHMNAjhHTUwlDP7jRZD-MI7-UUW-RLAhg",
  authDomain: "auth-3d347.firebaseapp.com",
  projectId: "auth-3d347",
  storageBucket: "auth-3d347.appspot.com",
  messagingSenderId: "359697794603",
  appId: "1:359697794603:web:e89a6bd026cbaec4aa4c6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
