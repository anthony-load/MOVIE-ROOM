import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";
const submit = document.getElementById('submit');
submit.addEventListener = ("click", function (event) {
  event.preventDefault ()

  {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    if (email) {
      alert('Redirecting to home page...');
      window.location.href = "home.html";
    } else {
      alert('Please enter your email.');
    }
  };

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    window.location.href = "home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("errorMessage")
    // ..
  });
})

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBCGeUjhJ5ByelwMHsFbQt_13zVCadFJMA",
   authDomain: "movie-room-90dcf.firebaseapp.com",
   projectId: "movie-room-90dcf",
   storageBucket: "movie-room-90dcf.firebasestorage.app",
   messagingSenderId: "478014791917",
   appId: "1:478014791917:web:2068732e45aab34263ace4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);