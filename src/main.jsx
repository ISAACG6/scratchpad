import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADliOr6GSoZ3PPIP4VxQAwl-Lb3dRWLbg",
  authDomain: "scratchpad-25306.firebaseapp.com",
  projectId: "scratchpad-25306",
  storageBucket: "scratchpad-25306.firebasestorage.app",
  messagingSenderId: "86704062748",
  appId: "1:86704062748:web:c21696e8f7e3a674f9bad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
