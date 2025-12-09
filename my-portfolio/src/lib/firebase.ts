import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiaxAQgmAGXIaSMeaf9FC2R-bWOXWXZl0",
  authDomain: "bharat-2c83a.firebaseapp.com",
  projectId: "bharat-2c83a",
  storageBucket: "bharat-2c83a.firebasestorage.app",
  messagingSenderId: "828793134062",
  appId: "1:828793134062:web:c542df249f8c759b3d0cff",
  measurementId: "G-J1EXNT2FLP"
};

const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false
});
