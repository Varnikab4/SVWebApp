import { initializeApp } from 'firebase/app';
import {getDatabase} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyA_H3fWBaYJ5sFFphdfpcklsW_nJLEM8ag",
    authDomain: "sveducarewebapp-d52c0.firebaseapp.com",
    databaseURL: "https://sveducarewebapp-d52c0-default-rtdb.firebaseio.com",
    projectId: "sveducarewebapp-d52c0",
    storageBucket: "sveducarewebapp-d52c0.appspot.com",
    messagingSenderId: "177915599198",
    appId: "1:177915599198:web:372b78080dc587940fd7cf"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;