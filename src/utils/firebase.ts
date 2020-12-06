import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBf1G7QLO4zdA5W1PVZ_RP1xx8jLyNq2uM",
    authDomain: "bookshop-firebase.firebaseapp.com",
    databaseURL: "https://bookshop-firebase-default-rtdb.firebaseio.com",
    projectId: "bookshop-firebase",
    storageBucket: "bookshop-firebase.appspot.com",
    messagingSenderId: "868504473049",
    appId: "1:868504473049:web:b7eaae96a5ebc350f8ddc8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
