import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCvaMtj72iltnDSE0NyOIhByjvXYQLBb84",
  authDomain: "rainjobsusers.firebaseapp.com",
  databaseURL: "https://rainjobsusers.firebaseio.com",
  projectId: "rainjobsusers",
  storageBucket: "rainjobsusers.appspot.com",
  messagingSenderId: "315846417580"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

export function auth(email, pw, name) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser);
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function saveUser(user,name) { //moje da se izvurshi sled registraciq s .update
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => user);
}

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
