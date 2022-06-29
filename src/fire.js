
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
var firebaseConfig = {
    apiKey: "AIzaSyDPS9Vep476smbuFyCPYTmZ0PO0cpHW4LA",
    authDomain: "login-6ba97.firebaseapp.com",
    projectId: "login-6ba97",
    storageBucket: "login-6ba97.appspot.com",
    messagingSenderId: "602194127601",
    appId: "1:602194127601:web:21ec736b273a948f121750",
    measurementId: "G-M9Q4HH6WW9"
};
// Initialize Firebase
export const fireApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const ath = getAuth(fireApp);
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {

    signInWithPopup(auth, provider).then((result) => {

        console.log(result);

    })
        .catch((error) => {

            console.log(error);

        })
};
const fprovider = new FacebookAuthProvider()
export const signInWithFacebook = () => {

    signInWithPopup(auth, fprovider).then((result) => {

        console.log(result);

    })

        .catch((error) => {

            console.log(error);

        })
};
const gprovider = new GithubAuthProvider()
export const signInWithGithub = () => {
    signInWithPopup(auth, gprovider).then((result) => {

        console.log(result);

    })

        .catch((error) => {

            console.log(error);

        })
};

