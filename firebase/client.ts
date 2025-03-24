import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAdxRwRo-vC2E5mt9tyj00sNhTMGFDBR4",
  authDomain: "prepwise-c1917.firebaseapp.com",
  projectId: "prepwise-c1917",
  storageBucket: "prepwise-c1917.firebasestorage.app",
  messagingSenderId: "58527985985",
  appId: "1:58527985985:web:13b9e65065e4594933f1c0",
  measurementId: "G-E8MKXBDZ4Q",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
