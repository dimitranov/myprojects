import firebase from "firebase/app"
import "firebase/database"

export const DB_CONFIG_DATA = {
    ...
  };


export const databaseRef = firebase.initializeApp(DB_CONFIG_DATA).database().ref();
