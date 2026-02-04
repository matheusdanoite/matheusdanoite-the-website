import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
// Check if config is valid to avoid crashing if env vars are missing
const isConfigured = firebaseConfig.apiKey && firebaseConfig.projectId;

const app = isConfigured ? initializeApp(firebaseConfig) : null;
const db = isConfigured ? getFirestore(app) : null;
const storage = isConfigured ? getStorage(app) : null;

export { db, storage };
export const isFirebaseSetup = !!isConfigured;
