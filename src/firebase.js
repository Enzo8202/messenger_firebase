import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAdge1rn48U0seaw4CoN3EH62WE6MVTN-8",
    authDomain: "chat-b3223.firebaseapp.com",
    projectId: "chat-b3223",
    storageBucket: "chat-b3223.appspot.com",
    messagingSenderId: "59305606262",
    appId: "1:59305606262:web:20c6d0a4c50fee23813357"
}).auth()