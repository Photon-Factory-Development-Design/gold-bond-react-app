import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBFnNIIQl4gWz2RPbcO-9H16m8xTrYnlak',
    authDomain: 'clps-f0f82.firebaseapp.com',
    databaseURL: 'https://clps-f0f82-default-rtdb.firebaseio.com'
};

firebase.initializeApp(config);

export const firebase_console = firebase;
export const db = firebase.database();
export let uid = '';

// constants

export const updateNotification = (url, data) => {
    db.ref(url).set(data);
};

export const updateFirebaseUserUID = (userId) => {
    uid = userId;
};
