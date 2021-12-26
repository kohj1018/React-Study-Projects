import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4VQANrxO_ttHlovDRlDbpqaYy0I8kcPg",
    authDomain: "fir-tutorial-b6fce.firebaseapp.com",
    projectId: "fir-tutorial-b6fce",
    storageBucket: "fir-tutorial-b6fce.appspot.com",
    messagingSenderId: "122950231548",
    appId: "1:122950231548:web:b3f2ce93f8f6b579693e79",
    measurementId: "G-Z4RJRNZRH2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);