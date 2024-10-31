// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_3TD0N_F2FihtgnFXPsE9RR-YZEudEKo",
  authDomain: "narutoapi-3ebf7.firebaseapp.com",
  projectId: "narutoapi-3ebf7",
  storageBucket: "narutoapi-3ebf7.appspot.com",
  messagingSenderId: "628863702540",
  appId: "1:628863702540:web:408f7ce2b48b6a962b0029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);