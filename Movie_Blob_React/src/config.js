import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCb4PyGRV3yzdbuBEE-HiDl-XwrBxGSTrk',
  authDomain: 'movieblob-21e6d.firebaseapp.com',
  databaseURL: 'https://movieblob-21e6d.firebaseio.com',
  projectId: 'movieblob-21e6d',
  storageBucket: 'movieblob-21e6d.appspot.com',
  messagingSenderId: '553155093626',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;

export function auth(email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser);
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
  return ref.child(`users/${user.uid}/info`)
    .set({

      email: user.email,

      uid: user.uid,

      myMovieList: [{
        id: 281957,
        poster_path: '/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg',
        title: 'The Revenant',
        vote_average: 7.3,
        vote_count: 7321,
        pick: true,
      },
      {
        id: 206487,
        poster_path: '/kDdUtDsGMQ3OYwoBtEQyJIGPz4V.jpg',
        title: 'Predestination',
        vote_average: 7.3,
        vote_count: 2263,
        pick: true,
      },
      {
        id: 497,
        poster_path: '/3yJUlOtVa09CYJocwBU8eAryja0.jpg',
        title: 'The Green Mile',
        vote_average: 8.3,
        vote_count: 4806,
        pick: true,
      },
      {
        id: 176,
        poster_path: '/dHYvIgsax8ZFgkz1OslE4V6Pnf5.jpg',
        title: 'Saw',
        vote_average: 7.2,
        vote_count: 2754,
        pick: true,
      }],

      myTvShowList: [{
        id: 44217,
        poster_path: '/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg',
        name: 'Vikings',
        vote_average: 7.3,
        vote_count: 1012,
        pick: true,
      },
      {
        id: 1399,
        poster_path: '/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg',
        name: 'Game of Thrones',
        vote_average: 8.1,
        vote_count: 4112,
        pick: true,
      }, {
        id: 60699,
        poster_path: '/zNb6etwR0mi92YsoYVx6kePgOHs.jpg',
        name: 'Marco Polo',
        vote_average: 7.3,
        vote_count: 133,
        pick: true,
      }, {
        id: 1396,
        poster_path: '/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg',
        name: 'Breaking Bad',
        vote_average: 8.3,
        vote_count: 2207,
        pick: true,
      }],
    })
    .then(() => user);
}

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
