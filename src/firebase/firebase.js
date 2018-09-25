
import config from './FirebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export {
    auth,
    firestore
}