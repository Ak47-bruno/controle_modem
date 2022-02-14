// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBajFHQzpVpa3Qz_NUuVCMMwPVdzl3bnec",
  authDomain: "controle-modem.firebaseapp.com",
  projectId: "controle-modem",
  storageBucket: "controle-modem.appspot.com",
  messagingSenderId: "346030169371",
  appId: "1:346030169371:web:40f36498d3095dcc38c7be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//export default app.database().ref();