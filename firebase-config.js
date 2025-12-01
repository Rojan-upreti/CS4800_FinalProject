// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYVuvCWFOaO3MI9_TTNBskhqbtRD6EgUM",
  authDomain: "rnglab3303.firebaseapp.com",
  projectId: "rnglab3303",
  storageBucket: "rnglab3303.firebasestorage.app",
  messagingSenderId: "730937569987",
  appId: "1:730937569987:web:c5e25cfb2fa4e7693be876",
  measurementId: "G-7P392DM3L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { auth, db, analytics };
