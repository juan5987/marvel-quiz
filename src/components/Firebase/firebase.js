import config from './config';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class Firebase {
    constructor() {
        initializeApp(config)
        this.auth = getAuth();
    }
    // inscription
    signupUser = (email, password) => createUserWithEmailAndPassword(this.auth, email, password);

    // connexion
    loginUser = (email, password) => this.auth.signInWithemailAndPassword(email, password);

    // déconnexion
    signoutUser = () => this.auth.signOut();

}

export default Firebase;