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
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth();
export const storage = firebase.storage().ref();
