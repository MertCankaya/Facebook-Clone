import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBUVg_utXRCtYjeT7Lgv94h_br_JIH_kTM",
    authDomain: "facebook-clone-826d8.firebaseapp.com",
    projectId: "facebook-clone-826d8",
    storageBucket: "facebook-clone-826d8.appspot.com",
    messagingSenderId: "268373730756",
    appId: "1:268373730756:web:347593675568fc6a603091",
    measurementId: "G-JH14WTGH6D"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;