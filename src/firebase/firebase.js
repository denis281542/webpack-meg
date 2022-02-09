import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, } from "firebase/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyA519V05wdSs3Qt4I5MMCPYlhqNjC5zZro',
  authDomain: 'megalandpark.firebaseapp.com',
  databaseURL: 'https://megalandpark-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'megalandpark.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig)