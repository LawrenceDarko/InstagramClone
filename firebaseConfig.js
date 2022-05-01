import { initializeApp } from "firebase/app";
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
import {getFirestore} from "firebase/firestore";
//import {...} from "firebase/functions";
import { getStorage } from "firebase/storage";

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


