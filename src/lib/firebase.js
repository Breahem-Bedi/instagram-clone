// import Firebase from 'firebase/app';
import Firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCO_43UO1mow5eBF12iCOFU35aPXaP6-pE",
    authDomain: "instagram-clone-7363c.firebaseapp.com",
    projectId: "instagram-clone-7363c",
    storageBucket: "instagram-clone-7363c.appspot.com",
    messagingSenderId: "569164507536",
    appId: "1:569164507536:web:0a56fc6b599ad7fbe7ab15"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);
console.log("firebase",firebase);

export {firebase, FieldValue};