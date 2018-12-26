import firebase from 'firebase';
// eslint-disable-next-line
import firestore from 'firebase/firestore';
// eslint-disable-next-line


const config = {
    apiKey: "AIzaSyA8nPyrJOxb9wNQoD2UJ-I38dAHmYUBsEs",
    authDomain: "dreamcinema-13250.firebaseapp.com",
    databaseURL: "https://dreamcinema-13250.firebaseio.com",
    projectId: "dreamcinema-13250",
    storageBucket: "",
    messagingSenderId: "504535615477"
  };

firebase.initializeApp(config);

export const db = firebase.firestore();

export const auth = firebase.auth();
