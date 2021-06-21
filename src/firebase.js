import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp9-HvjtUtYjQad_fsRlZlQPKtn78VFKU",
  authDomain: "linkedin-clone-react-red-8b924.firebaseapp.com",
  projectId: "linkedin-clone-react-red-8b924",
  storageBucket: "linkedin-clone-react-red-8b924.appspot.com",
  messagingSenderId: "965298373375",
  appId: "1:965298373375:web:f7ffb0f19baf50c32ec2ca",
  measurementId: "G-PS7NDH44SM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
