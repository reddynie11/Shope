import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHFPF8RxfSuripR8K4RYhHp8VKhzaQq4o",
    authDomain: "shope-db.firebaseapp.com",
    databaseURL: "https://shope-db.firebaseio.com",
    projectId: "shope-db",
    storageBucket: "",
    messagingSenderId: "159136479021",
    appId: "1:159136479021:web:b1f17ceebc661f9c6ec5a4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);