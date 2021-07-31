import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAOXzUdrmx84VUHYgKWkhLZzXE8LT3dXl0",
    authDomain: "facebook-clone-project-17520.firebaseapp.com",
    projectId: "facebook-clone-project-17520",
    storageBucket: "facebook-clone-project-17520.appspot.com",
    messagingSenderId: "422931550720",
    appId: "1:422931550720:web:106a91f4e3c1c4441efee5",
    measurementId: "G-RMKG0BEWFS"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
