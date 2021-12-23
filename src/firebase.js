import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGyKMZ7cehEdzc3D8_POgnJK8vVmkrwZ0",
  authDomain: "lin-clone-firebase-c1b60.firebaseapp.com",
  projectId: "lin-clone-firebase-c1b60",
  storageBucket: "lin-clone-firebase-c1b60.appspot.com",
  messagingSenderId: "879303850295",
  appId: "1:879303850295:web:b45ebdff65c1f6b98182b2",
  measurementId: "G-75E8P3ELJN",
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
