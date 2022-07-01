// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5A9nastRgrb65u58Bi-0SLZ6IZgg2A74",
  authDomain: "car-search-4e826.firebaseapp.com",
  projectId: "car-search-4e826",
  storageBucket: "car-search-4e826.appspot.com",
  messagingSenderId: "506691644224",
  appId: "1:506691644224:web:53d7529883bec690d6e8a5",
  measurementId: "G-GYSQN3EM4N"
};
export default firebaseConfig

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export  const auth = getAuth(app);
