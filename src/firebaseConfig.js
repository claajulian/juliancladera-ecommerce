import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARMlfRwzKU-sRuRdqIhYaeaojJM0xuz5o",
  authDomain: "e-commerce-cladera.firebaseapp.com",
  projectId: "e-commerce-cladera",
  storageBucket: "e-commerce-cladera.appspot.com",
  messagingSenderId: "46144991136",
  appId: "1:46144991136:web:a45495c4fb9645cb033ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)