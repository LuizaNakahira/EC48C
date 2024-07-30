import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz2mkjSBIONErDPNhjSb8X9riGruJJF6Q",
    authDomain: "mydata-18dda.firebaseapp.com",
    projectId: "mydata-18dda",
    storageBucket: "mydata-18dda.appspot.com",
    messagingSenderId: "917419768187",
    appId: "1:917419768187:web:f00047091323d85bc825de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};