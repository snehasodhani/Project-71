import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4BMoFF5hPGv42WUx7kHNZidXNvDMRnOo",
  authDomain: "project-71-a96fd.firebaseapp.com",
  projectId: "project-71-a96fd",
  storageBucket: "project-71-a96fd.appspot.com",
  messagingSenderId: "152799186908",
  appId: "1:152799186908:web:cedb7b54425b1859a90919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
