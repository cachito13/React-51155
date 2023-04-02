import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0LnWeTWT280nhchpPX96VYnQaP7Jn3-k",
  authDomain: "ecommerce-51155.firebaseapp.com",
  projectId: "ecommerce-51155",
  storageBucket: "ecommerce-51155.appspot.com",
  messagingSenderId: "488266087048",
  appId: "1:488266087048:web:34a7666b24a66be9373d3d",
  measurementId: "G-PYTP9WZ0BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)