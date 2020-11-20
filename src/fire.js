import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBxQ5z6D2tqd30r2LxzW2N3j5ohShRszUc",
    authDomain: "apptest-cd8ca.firebaseapp.com",
    databaseURL: "https://apptest-cd8ca.firebaseio.com",
    projectId: "apptest-cd8ca",
    storageBucket: "apptest-cd8ca.appspot.com",
    messagingSenderId: "638226939854",
    appId: "1:638226939854:web:a94132a302772edf1f759f",
    measurementId: "G-G9HE3JJ7YP"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;