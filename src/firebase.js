// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDso0y7bq1h0ZEZk1VqgkPePfflUM1sDrc",
  authDomain: "newagent-91c05.firebaseapp.com",
  databaseURL: "https://newagent-91c05.firebaseio.com",
  projectId: "newagent-91c05",
  storageBucket: "newagent-91c05.appspot.com",
  messagingSenderId: "1090756951537",
  appId: "1:1090756951537:web:06fc8e23cbfebc08881850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth };
