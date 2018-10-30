import { auth } from './firebase';

//signup
export const createUserWithEmailAndPassword = (email, password) => {

    let result = auth.createUserWithEmailAndPassword(email, password).catch( err => {
        return err;
    });
    
    return result;
}

//sign in
export const signInUserWithEmail = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
}

export const onAuthStateChanged = (user) => {
    auth.onAuthStateChanged(user);
}

export const signOut = () => {
    return auth.signOut();
}