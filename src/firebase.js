
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1MYkUVnNQlWTQV0nRUodNtii67Soyuj0",
  authDomain: "chat-app-4c988.firebaseapp.com",
  projectId: "chat-app-4c988",
  storageBucket: "chat-app-4c988.appspot.com",
  messagingSenderId: "1012005274846",
  appId: "1:1012005274846:web:a7675c3fcb83e6cf65ae4f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();