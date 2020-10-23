import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCiS9NnIGhTkhjZmsueVejaV7BbqHCzK5s",
    authDomain: "react-1-dcbdc.firebaseapp.com",
    databaseURL: "https://react-1-dcbdc.firebaseio.com",
    projectId: "react-1-dcbdc",
    storageBucket: "react-1-dcbdc.appspot.com",
    messagingSenderId: "64930115267",
    appId: "1:64930115267:web:704b5bdf93b299ee27bc76",
    measurementId: "G-GK2HK36XED"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;