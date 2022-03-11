import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDdhfMjhI8eYCfzzCsVc_aAwAsenMu20eg",
    authDomain: "auth-2020-a0664.firebaseapp.com",
    projectId: "auth-2020-a0664",
    storageBucket: "auth-2020-a0664.appspot.com",
    messagingSenderId: "1065429834434",
    appId: "1:1065429834434:web:1c61bf1801c9a5229db95b"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }