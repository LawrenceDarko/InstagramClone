import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getStorage, uploadBytes } from 'firebase/storage';
// import { getRemoteConfig, fetchAndActivate } from 'firebase/remote-config';
// import { getRemoteConfig, fetchAndActivate } from 'firebase/remote-config';
// import { getDatabase, ref, get } from 'firebase/database';
// import { getMessaging, getToken } from 'firebase/messaging';
// import { getPerformance } from 'firebase/performance';
// import { getAnalytics, logEvent } from 'firebase/analytics';



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


