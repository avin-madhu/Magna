// Firebase Config
import "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";  // Update this line
import "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";  // Add similar lines for other Firebase modules
import "https://www.gstatic.com/firebasejs/10.8.0/firebase-functions.js";


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

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();

  });



// Firebase Config
