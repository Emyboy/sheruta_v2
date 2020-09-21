import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyCGSLdXa6zRSY1tvsEs8N5w1Nfo58hxEmg",
//   authDomain: "sheruta-1368d.firebaseapp.com",
//   databaseURL: "https://sheruta-1368d.firebaseio.com",
//   projectId: "sheruta-1368d",
//   storageBucket: "sheruta-1368d.appspot.com",
//   messagingSenderId: "346651423038",
//   appId: "1:346651423038:web:34ddc533698ecc3e"
// };

var firebaseConfig = {
    apiKey: "AIzaSyD_f4OsL8x0KVHBymXOtXCZbQTqRzwyuH0",
    authDomain: "sheruta-try.firebaseapp.com",
    databaseURL: "https://sheruta-try.firebaseio.com",
    projectId: "sheruta-try",
    storageBucket: "sheruta-try.appspot.com",
    messagingSenderId: "1080688469617",
    appId: "1:1080688469617:web:14748e91d45ea49f7cddd0",
    measurementId: "G-GNLVGS8SM3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth();
export const storage = firebase.storage().ref();
