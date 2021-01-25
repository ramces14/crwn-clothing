import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
   apiKey: "AIzaSyBmZjFNVGYtVKlTOWwW4T4aU8F7gfWe4z0",
   authDomain: "crwn-db-e2192.firebaseapp.com",
   projectId: "crwn-db-e2192",
   storageBucket: "crwn-db-e2192.appspot.com",
   messagingSenderId: "780864626021",
   appId: "1:780864626021:web:e04a719d06cc830ce4d58c",
   measurementId: "G-1F2FCB12JE"
 };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: "select_account" });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;