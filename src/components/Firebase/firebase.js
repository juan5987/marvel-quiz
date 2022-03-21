import config from './config';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

class Firebase {
    constructor() {
        initializeApp(config)
        this.auth = getAuth();
    }
    // inscription
    signupUser = (email, password) => createUserWithEmailAndPassword(this.auth, email, password);

    // connexion
    loginUser = (email, password) => signInWithEmailAndPassword(this.auth, email, password);

    // déconnexion
    signoutUser = () => signOut(this.auth);

    // Reset password
    passwordReset =  email => sendPasswordResetEmail(this.auth, email);

}

export default Firebase;