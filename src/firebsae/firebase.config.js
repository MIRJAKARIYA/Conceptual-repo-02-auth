// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyxONwZPUBcbFedNLA41CyhfS-yqG6V7Q",
  authDomain: "second-concep-firebase.firebaseapp.com",
  projectId: "second-concep-firebase",
  storageBucket: "second-concep-firebase.firebasestorage.app",
  messagingSenderId: "1053716333625",
  appId: "1:1053716333625:web:7c827e5f8989a39118b9e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;