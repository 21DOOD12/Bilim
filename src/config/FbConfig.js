import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvRY5kmN1dNEKEjnT_m2M_RYLcCWzySRA",
  authDomain: "bilim-568e2.firebaseapp.com",
  databaseURL: "https://bilim-568e2-default-rtdb.firebaseio.com",
  projectId: "bilim-568e2",
  storageBucket: "bilim-568e2.appspot.com",
  messagingSenderId: "278700181055",
  appId: "1:278700181055:web:f81db23a4732af6de2da8a",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
