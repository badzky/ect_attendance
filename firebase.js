// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
    getFirestore, collection, addDoc, getDocs, query, where, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcc-F0PpwXi6NHmT3SksGt3OP8ndCj0Q4",
    authDomain: "student-attendance-d8783.firebaseapp.com",
    projectId: "student-attendance-d8783",
    storageBucket: "student-attendance-d8783.appspot.com",
    messagingSenderId: "333475760180",
    appId: "1:333475760180:web:037e78b53017ce61f0e261",
    measurementId: "G-W10W0B6SG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ✅ Export Firestore instance

// ✅ Export Firestore functions including `query` and `where`
export { collection, addDoc, getDocs, query, where, serverTimestamp };
