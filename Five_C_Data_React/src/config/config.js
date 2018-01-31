import firebase from "firebase/app"
import "firebase/database"

export const DB_CONFIG_DATA = {
    apiKey: "AIzaSyCzXlQi69M81BrFWE6VyxC9RPvjRQXVzJU",
    authDomain: "fivecassesment.firebaseapp.com",
    databaseURL: "https://fivecassesment.firebaseio.com",
    projectId: "fivecassesment",
    storageBucket: "fivecassesment.appspot.com",
    messagingSenderId: "18851441588"
  };


export const databaseRef = firebase.initializeApp(DB_CONFIG_DATA).database().ref();
