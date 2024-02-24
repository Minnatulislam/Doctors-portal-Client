// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZZjNgyMvxvLBoXhquEa7c340p0hMgTBw",
  authDomain: "doctors-portal-9054b.firebaseapp.com",
  projectId: "doctors-portal-9054b",
  storageBucket: "doctors-portal-9054b.appspot.com",
  messagingSenderId: "514600259112",
  appId: "1:514600259112:web:184d2248edc91a1e452f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
