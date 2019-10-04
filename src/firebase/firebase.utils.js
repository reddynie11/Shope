import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';

const config = {
    apiKey: "AIzaSyBHFPF8RxfSuripR8K4RYhHp8VKhzaQq4o",
    authDomain: "shope-db.firebaseapp.com",
    databaseURL: "https://shope-db.firebaseio.com",
    projectId: "shope-db",
    storageBucket: "",
    messagingSenderId: "159136479021",
    appId: "1:159136479021:web:b1f17ceebc661f9c6ec5a4"
};

export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log(error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);