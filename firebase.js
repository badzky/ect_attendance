// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
    getFirestore, 
    collection, addDoc, getDocs, query, where, serverTimestamp,
    doc, setDoc, getDoc // ✅ Import these
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ✅ Firestore instance

// ✅ Export everything needed
export { 
    collection, addDoc, getDocs, query, where, serverTimestamp,
    doc, setDoc, getDoc
};

