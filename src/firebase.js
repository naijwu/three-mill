import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNhlzjLTawDeQbVAh_DHsvUnAbfHdfx3I",
  authDomain: "three-mill.firebaseapp.com",
  projectId: "three-mill",
  storageBucket: "three-mill.appspot.com",
  messagingSenderId: "480010613712",
  appId: "1:480010613712:web:f06d4de2bf4c656776ffd5"
};

const app = initializeApp(firebaseConfig);