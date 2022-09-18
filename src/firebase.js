import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyC0SlbmvAQtzu7d1TJjb_cr9gWnKJk9RTw',
    authDomain: 'twitter-clone-79e24.firebaseapp.com',
    projectId: 'twitter-clone-79e24',
    storageBucket: 'twitter-clone-79e24.appspot.com',
    messagingSenderId: '717832201753',
    appId: '1:717832201753:web:90b4fc3689ff11f213ac88',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
