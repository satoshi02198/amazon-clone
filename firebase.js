// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import firebase from "firebase";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqDJaDWIZ6bD5SWPjc3nWTBH7CqThvgxg",
  authDomain: "clone-7852b.firebaseapp.com",
  projectId: "clone-7852b",
  storageBucket: "clone-7852b.appspot.com",
  messagingSenderId: "915954214969",
  appId: "1:915954214969:web:439d9973ee48d159c0c5e8",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
