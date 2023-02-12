// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  

const firebaseConfig = {
  apiKey: "AIzaSyDRBwg2Mp3lthcNF1F0qLJb0AaONSoKI48",
  authDomain: "saylani-ecommerce.firebaseapp.com",
  projectId: "saylani-ecommerce",
  storageBucket: "saylani-ecommerce.appspot.com",
  messagingSenderId: "220939750933",
  appId: "1:220939750933:web:cb557a886ce3362a53881c",
  measurementId: "G-EJ19ZDWM0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app; 