import firebase from 'firebase/app';
import 'firebase/firstore';

const firebaseConfig = {
  apiKey: "AIzaSyD8i3k8iT1SSvK0NFZ-mj4qZqNYzrt70Ck",
  authDomain: "evernote-clone-9dd06.firebaseapp.com",
  projectId: "evernote-clone-9dd06",
  storageBucket: "evernote-clone-9dd06.appspot.com",
  messagingSenderId: "355108015459",
  appId: "1:355108015459:web:6b0136eca4abc5130d1756"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);