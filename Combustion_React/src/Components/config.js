  import firebase from 'firebase'

  const config = {
      ...
    };

  firebase.initializeApp(config)

  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth
