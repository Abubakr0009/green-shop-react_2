import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtiWrUTZU1oIH0bayMiVIp1NOnH6RFkjQ",
  authDomain: "green-shop-ab2a0.firebaseapp.com",
  projectId: "green-shop-ab2a0",
  storageBucket: "green-shop-ab2a0.firebasestorage.app",
  messagingSenderId: "435001367713",
  appId: "1:435001367713:web:cabdf2f60a883951ed64e0",
  measurementId: "G-ZSS58ET4RC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
