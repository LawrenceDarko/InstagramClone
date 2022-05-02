// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlBAmoNNudFt7_U7b9KaZX50yZQCI7SWU",
  authDomain: "instagramclone-1ab97.firebaseapp.com",
  projectId: "instagramclone-1ab97",
  storageBucket: "instagramclone-1ab97.appspot.com",
  messagingSenderId: "453780416614",
  appId: "1:453780416614:web:691e4593766c333480a5a7"
};

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();


export {app, db, storage};


