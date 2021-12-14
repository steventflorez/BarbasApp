// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6R-7dykg98HilN5KdsoQRwy-Vqw-pzd8",
  authDomain: "crud-38c64.firebaseapp.com",
  databaseURL: "https://crud-38c64-default-rtdb.firebaseio.com",
  projectId: "crud-38c64",
  storageBucket: "crud-38c64.appspot.com",
  messagingSenderId: "903292111702",
  appId: "1:903292111702:web:3c117e1cf089e38922e4f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set,get, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase();

//referencias

