import firebase from 'firebase';
import moment from 'moment';

export function initFirebase() {
  let config = {
    apiKey: "AIzaSyA8TdnD-6yLXEVS-O_PJ9C0un1ntgGkYJE",
    authDomain: "minutes-english.firebaseapp.com",
    databaseURL: "https://minutes-english.firebaseio.com",
    storageBucket: "minutes-english.appspot.com",
    messagingSenderId: "772649462590"
  };
  firebase.initializeApp(config);
}
