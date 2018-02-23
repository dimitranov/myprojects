import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAE3mybh0lzPJPf4PDpKd8wpLT81zh-CYk",
    authDomain: "eventmanager-fddf9.firebaseapp.com",
    databaseURL: "https://eventmanager-fddf9.firebaseio.com",
    projectId: "eventmanager-fddf9",
    storageBucket: "eventmanager-fddf9.appspot.com",
    messagingSenderId: "252065832610"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
