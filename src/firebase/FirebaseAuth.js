import { auth } from './firebase';

//signup
export const createUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
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