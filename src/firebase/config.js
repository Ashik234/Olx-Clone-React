import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfahGantJwVFxIU-GFqOvHsFmgjPeUkYo",
    authDomain: "fir-a1fab.firebaseapp.com",
    projectId: "fir-a1fab",
    storageBucket: "fir-a1fab.appspot.com",
    messagingSenderId: "935576033168",
    appId: "1:935576033168:web:b81e3b8e7985cfc84a8515",
    measurementId: "G-WBZD06EW6E"
};
  
export default firebase.initializeApp(firebaseConfig)