import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAm16xp_hu00v6gxCwWu77U4RTcx7wbbaM",
    authDomain: "flight-8fa1a.firebaseapp.com",
    databaseURL: "https://flight-8fa1a.firebaseio.com",
    projectId: "flight-8fa1a",
    storageBucket: "flight-8fa1a.appspot.com",
    messagingSenderId: "829081419843"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

