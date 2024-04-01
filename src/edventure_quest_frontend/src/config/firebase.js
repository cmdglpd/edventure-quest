// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  //PRODUCTION
  // apiKey: "AIzaSyAqs2B_DD5EG5u8gcYxDDwM21MWwLPTerE",
  // authDomain: "uppinion-prod.firebaseapp.com",
  // projectId: "uppinion-prod",
  // storageBucket: "uppinion-prod.appspot.com",
  // messagingSenderId: "184026671523",
  // appId: "1:184026671523:web:65c5097f62701d3fad1216"

  //DEVELOPMENT
  apiKey: "AIzaSyBV9dIUsz_TlzERG-I-4T68ocNl7AIqtRg",
  authDomain: "edventure-quest.firebaseapp.com",
  projectId: "edventure-quest",
  storageBucket: "edventure-quest.appspot.com",
  messagingSenderId: "120040803625",
  appId: "1:120040803625:web:73f4541db5e6ee03ec3b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, auth };
