import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBqHRg6f19ZvydBk6mghMZ4-qhjX9R5MCA',
  authDomain: 'faebookclone.firebaseapp.com',
  databaseURL: 'https://faebookclone.firebaseio.com',
  projectId: 'faebookclone',
  storageBucket: 'faebookclone.appspot.com',
  messagingSenderId: '980018065092',
  appId: '1:980018065092:web:e6d78e65225a6a724e6391',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
