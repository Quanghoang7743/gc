
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB4bPV7imAL5dBuftG12yi2xj8yzhYQVrQ",
  authDomain: "gamecloudweb.firebaseapp.com",
  projectId: "gamecloudweb",
  storageBucket: "gamecloudweb.firebasestorage.app",
  messagingSenderId: "365914022502",
  appId: "1:365914022502:web:589d2c55a1ae1b94b7c3a7",
  measurementId: "G-5SCV8JNN6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export {app, analytics};
export default app;

export const auth = getAuth(app);

export const db = getFirestore(app);

