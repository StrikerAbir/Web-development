// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDojTHA3b8VOu-Dl-4ramaTEvfAfVm_0eQ",
  authDomain: "email-password-auth-ec6f4.firebaseapp.com",
  projectId: "email-password-auth-ec6f4",
  storageBucket: "email-password-auth-ec6f4.appspot.com",
  messagingSenderId: "653043964729",
  appId: "1:653043964729:web:c6ccc39c9a531dc32066e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;