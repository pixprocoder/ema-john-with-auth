// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOb4b4nllU-RXwQl7GaBMvi97tkprX4s",
  authDomain: "ema-john-with-auth-5014f.firebaseapp.com",
  projectId: "ema-john-with-auth-5014f",
  storageBucket: "ema-john-with-auth-5014f.appspot.com",
  messagingSenderId: "634197674965",
  appId: "1:634197674965:web:802cad8e8bf737b6d60b5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
