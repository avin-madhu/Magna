// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAbzDGgeZCaiq-dmWQNqnpq_yi6KLyn_Q0",
  authDomain: "miniproject-740e2.firebaseapp.com",
  projectId: "miniproject-740e2",
  storageBucket: "miniproject-740e2.appspot.com",
  messagingSenderId: "493659960891",
  appId: "1:493659960891:web:d8908059f91a37a6bc8e1e",
  measurementId: "G-49BHFJDWQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

// update firestore settings
db.settings({ timestampsInSnapshots: true });

// Sign Up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  console.log(email, password);

  });



// Firebase Config
