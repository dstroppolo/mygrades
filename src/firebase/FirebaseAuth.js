import { auth } from './firebase';

//signup
export const createUserWithEmailAndPassword = (email, password) => {

    auth.createUserWithEmailAndPassword(email, password).then( response => {
        console.log(response);    
    }).catch( error => {
        console.log(error);
    });
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