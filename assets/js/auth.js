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


auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out');
    }
})

// Sign Up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log("user Created", cred.user);
    alert("User Created Successfully")
    // const modal = document.querySelector('#signup-modal');
    // modal.hide()
    signupForm.reset();
  });
  });


  // Logout or Sign Out
  const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
        console.log('user signed out');
        });
    });


// Login Users
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        auth.signInWithEmailAndPassword(email, password).then((cred) => {
        console.log("user Logged In", cred.user);
        loginForm.reset();
        });
    });




