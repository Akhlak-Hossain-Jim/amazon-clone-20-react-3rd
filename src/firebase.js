import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVuzAphLxB8M5Mt3YpIwbDEJY9nmUvlBI",
    authDomain: "clone-ahj.firebaseapp.com",
    projectId: "clone-ahj",
    storageBucket: "clone-ahj.appspot.com",
    messagingSenderId: "211273398951",
    appId: "1:211273398951:web:052d1732fcb25874107982",
    measurementId: "G-SLS8EYS9TY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };