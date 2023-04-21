import firebase from "firebase";
// import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCOqumupTmCwcqlQ5NiTqx7kQkVoQ4HjFs",
  authDomain: "crowd-funding-d4274.firebaseapp.com",
  projectId: "crowd-funding-d4274",
  storageBucket: "crowd-funding-d4274.appspot.com",
  messagingSenderId: "846836264240",
  appId: "1:846836264240:web:6d354ded17c013f8bbacf5",
  measurementId: "G-EFQXWDT8TD"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {storage};