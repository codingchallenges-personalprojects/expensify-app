import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDFxV6IA6hmZWtcs3MZmwB5_hT4OS3eIHs",
  authDomain: "expensify-61625.firebaseapp.com",
  databaseURL: "https://expensify-61625-default-rtdb.firebaseio.com",
  projectId: "expensify-61625",
  storageBucket: "expensify-61625.appspot.com",
  messagingSenderId: "930729495628",
  appId: "1:930729495628:web:f8119e07460938671938e9",
  measurementId: "G-V3D7TMLNTM"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider  = new firebase.auth.GoogleAuthProvider();


export { firebase , googleAuthProvider , database as default };


